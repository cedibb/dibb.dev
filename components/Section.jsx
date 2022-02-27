const Section = ({ item }) => (
  <section id={`${item.title.toLowerCase().replace(" ", "-")}`}>
    <div className={"section-bullet"}></div>
    <h2 style={{ display: "inline-block" }}>{item.title.toUpperCase()}</h2>

    <JobCard
      jobTitle={"Web Developer"}
      companyName={"DNAC Higiene"}
      startDate={"2017"}
      endDate={"2022"}
      description={
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quam nemo illo nesciunt dolores quae est. Molestiae reiciendis culpa libero. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quam nemo illo nesciunt dolores quae est. Molestiae reiciendis culpa libero."
      }
    />
    <JobCard
      jobTitle={"Web Developer"}
      companyName={"DNAC Higiene"}
      startDate={"2017"}
      endDate={"2022"}
      description={
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quam nemo illo nesciunt dolores quae est. Molestiae reiciendis culpa libero. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quam nemo illo nesciunt dolores quae est. Molestiae reiciendis culpa libero."
      }
    />
    <JobCard
      jobTitle={"Web Developer"}
      companyName={"DNAC Higiene"}
      startDate={"2017"}
      endDate={"2022"}
      description={
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quam nemo illo nesciunt dolores quae est. Molestiae reiciendis culpa libero. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quam nemo illo nesciunt dolores quae est. Molestiae reiciendis culpa libero."
      }
    />
  </section>
);
