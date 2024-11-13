const { test, expect } = require('@playwright/test');

let userId; 
// Global variable to store userId for sharing across tests
test.describe.serial('GoRest API Positive testcases', () => {
// This setup function runs once before all tests to create a user
test.beforeAll('Create a new user and verify user creation', async ({ request }) => {
  const response = await request.post('https://gorest.co.in/public/v2/users', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 87dd23efe5fe5658b1139a1d024a81eff99ba8ed5af8ca32970f9d7ca90579e1',
    },
    data: {
      name: "Deeee" ,
      email: "deeee.dee@example.com",
      gender: "female",
      status: "active",
    },
  });

  const body = await response.json();
  userId = body.id; // Store the userId globally for other tests
  console.log('User successfully created with ID:', userId);
  expect(response.status()).toBe(201); // Validate that the user was created successfully
  expect(body).toHaveProperty('id'); // Ensure that user ID is returned in response

});

// This cleanup function runs once after all tests to delete the created user
test.afterAll('Delete the user created for testing', async ({ request }) => {
  if (userId) {
    const response = await request.delete(`https://gorest.co.in/public/v2/users/${userId}`, {
      headers: {
        'Authorization': 'Bearer 87dd23efe5fe5658b1139a1d024a81eff99ba8ed5af8ca32970f9d7ca90579e1',
      },
    });
    console.log('User deleted with ID:', userId);
    expect(response.status()).toBe(204); // Validate that the deletion was successful
  }
});

// Test to verify if the created user data matches the expected values
test('Verify user data was posted correctly', async ({ request }) => {
  const response = await request.get(`https://gorest.co.in/public/v2/users/${userId}`, {
    headers: {
      'Authorization': 'Bearer 87dd23efe5fe5658b1139a1d024a81eff99ba8ed5af8ca32970f9d7ca90579e1',
    },
  });

  const body = await response.json();
  expect(response.status()).toBe(200); // Validate that user details are fetched successfully
  expect(body.id).toBe(userId); // Ensure that the fetched user ID matches
  console.log('Verified created user details:', body);
});

// Test to update the user's details and verify if the update is successful
test('Update user data and verify update', async ({ request }) => {
  const updatedUser = {
    name: "John Dee Updated",
    email: "john.dee.updated@example.com",
  };

  const response = await request.put(`https://gorest.co.in/public/v2/users/${userId}`, {
    headers: {
      'Authorization': 'Bearer 87dd23efe5fe5658b1139a1d024a81eff99ba8ed5af8ca32970f9d7ca90579e1',
      'Content-Type': 'application/json',
    },
    data: updatedUser,
  });

  const body = await response.json();
  expect(response.status()).toBe(200); // Validate that the update was successful
  expect(body.name).toBe(updatedUser.name); // Verify that name was updated
  expect(body.email).toBe(updatedUser.email); // Verify that email was updated
  console.log('Updated user details:', body);
});

// Test to verify that the updated user details are correctly stored
test('Verify updated user details', async ({ request }) => {
  const response = await request.get(`https://gorest.co.in/public/v2/users/${userId}`, {
    headers: {
      'Authorization': 'Bearer 87dd23efe5fe5658b1139a1d024a81eff99ba8ed5af8ca32970f9d7ca90579e1',
    },
  });

  const body = await response.json();
  expect(response.status()).toBe(200); // Validate that user details are fetched successfully
  expect(body.id).toBe(userId); // Ensure that the fetched user ID matches
  expect(body.name).toBe("John Dee Updated"); // Check the updated name
  expect(body.email).toBe("john.dee.updated@example.com"); // Check the updated email
  console.log('Verified updated user details:', body);
});

});
