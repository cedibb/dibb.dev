class App extends React.Component {
  state = {
    active: false,
    sidebar: {
      photo:
        "https://media-exp1.licdn.com/dms/image/C4E03AQG2wje0xmvS1g/profile-displayphoto-shrink_200_200/0/1644290669008?e=1651104000&v=beta&t=LQNkw0yPtzbnPaMqwnPPlBrxUZ7BwgVyxZk1JDOumBc",
      name: {
        first: "Carlos",
        last: "Dibb",
      },
      occupation: "Web Developer",
      menuItems: [
        { title: "About Me", icon: "user" },
        { title: "Work Experience", icon: "laptop-code" },
        { title: "Skills", icon: "code" },
        // { title: "Accomplishments", icon: "award" },
        { title: "Education", icon: "books" },
        { title: "Contact", icon: "message-code" },
      ],
    },
  };

  render() {
    return this.state.active ? (
      <React.Fragment>
        <Sidebar data={this.state.sidebar} />
        <main>
          {this.state.sidebar.menuItems.map((item, i) => (
            <Section item={item} key={i} />
          ))}
        </main>
        <span id={"top-shape"}></span>
        <span id={"bottom-buttons"}>
          <i className={"bottom-button ripple"} id={"btn-contact"}>
            <Icon
              {...{
                set: "light",
                name: "phone",
                color: "white",
                size: 50,
              }}
            />
          </i>

          <i className={"bottom-button ripple"} id={"btn-download"}>
            <Icon
              {...{
                set: "light",
                name: "download",
                color: "white",
                size: 50,
              }}
            />
          </i>
        </span>
      </React.Fragment>
    ) : (
      <h1>Under construction.</h1>
    );
  }
}
