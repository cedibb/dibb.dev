const Sidebar = ({ data }) => {
  const { photo, name, occupation, menuItems } = data;
  return (
    <aside>
      <div id={"photo"}>
        <img src={photo} alt="" />
      </div>
      <p id={"first-name"}>{name.first.toUpperCase()}</p>
      <p id={"last-name"}>{name.last.toUpperCase()}</p>
      <p id={"occupation"}>{occupation.toUpperCase()}</p>
      <nav id={"main-nav"}>
        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.title.toLowerCase().replace(" ", "-")}`}
                className={"ripple"}
              >
                <i className={"nav-icon"}>
                  <Icon
                    {...{
                      set: "light",
                      name: item.icon,
                      color: "white",
                      size: 30,
                    }}
                  />
                </i>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p id={"copy"}>
        Developed with React @ {new Date().getFullYear()}
        <br />
        by {`${name.first} ${name.last}`}
      </p>
    </aside>
  );
};
