const JobCard = ({
  jobTitle,
  companyName,
  startDate,
  endDate,
  description,
}) => (
  <div className={"job-card"}>
    <div className={"placeholder"}></div>
    <h3 className={"job-title"}>{jobTitle.toUpperCase()}</h3>
    <p className={"company-name"}>
      {companyName} | {startDate} - {endDate}
    </p>
    <p className={"job-description"}>{description}</p>
  </div>
);
