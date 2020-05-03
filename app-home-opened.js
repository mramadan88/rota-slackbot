const homeBlocks = require('./bot-response/blocks-home');

/*------------------
  APP HOME OPENED
------------------*/
const app_home_opened = (app) => {
  app.event('app_home_opened', async({ event, context }) => {
    console.log('Event:', event, 'Context:', context);

    const userID = event.user;
    const botToken = context.botToken;

    try {
      const result = await app.client.views.publish({
        token: botToken,
        user_id: userID,
        view: {
          "type": "home",
          "blocks": homeBlocks(userID)
        }
      });
    }
    catch (err) {
      console.error(err);
    }
  });
}

module.exports = app_home_opened;