FlowRouter.route("/", {
    name: "Home",
    action(params) {
        ReactLayout.render(App);
    }
});
