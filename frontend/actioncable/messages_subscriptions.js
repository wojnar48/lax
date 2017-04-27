const MessagesChannel = {
  subscribe(received) {
    this.unsubscribe();
    window.App.MessagesChannelSubscription = window.App.cable.subscriptions.create({
      channel: "MessagesChannel",
    }, {
      received: received
    });
  },

  unsubscribe() {
    if (window.MessagesChannelSubscription === undefined) {
      return false;
    }

    window.App.cable.subscriptions.remove(window.App.MessagesChannelSubscription);
    delete window.App.MessagesChannelSubscription;
  }
};

export default MessagesChannel;
