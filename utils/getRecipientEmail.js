const getRecipientEmail = (users, userLoggedIn) =>
    users?.filter((userToFiletr)=> userToFiletr !== userLoggedIn?.email)[0];

export default getRecipientEmail;