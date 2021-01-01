import { Project } from "types/Project";

const projects: Project[] = [
  {
    name: "Notiplac",
    imagesSources: [
      `${process.env.PUBLIC_URL}/images/portfolio/notiplac_login.png`,
      `${process.env.PUBLIC_URL}/images/portfolio/notiplac_home.png`,
      `${process.env.PUBLIC_URL}/images/portfolio/notiplac_promos.png`,
      `${process.env.PUBLIC_URL}/images/portfolio/notiplac_vehicles.png`,
      `${process.env.PUBLIC_URL}/images/portfolio/notiplac_vehicle-details.png`,
      `${process.env.PUBLIC_URL}/images/portfolio/notiplac_map.png`,
    ],
    description:
      "Notiplac is a markerplace where we connect car owners and car shops in one place. The deal was create assitance algorithm to remind car owners their legal and maintenance tasks. Available on App Store.",
    techItems: [
      "Xcode",
      "Swift",
      "AWS SDK",
      "Google Maps",
      "Analytics",
      "APNS",
    ],
  },
  {
    name: "Celsia Movilidad Sostenible",
    imagesSources: [
      `${process.env.PUBLIC_URL}/images/portfolio/celsia_login.png`,
      `${process.env.PUBLIC_URL}/images/portfolio/celsia_map.png`,
      `${process.env.PUBLIC_URL}/images/portfolio/celsia_history.png`,
      `${process.env.PUBLIC_URL}/images/portfolio/celsia_profile.png`,
      `${process.env.PUBLIC_URL}/images/portfolio/celsia_vehicles.png`,
    ],
    description:
      "Celsia Movilidad Sostenible is a mobile app created for a  big electric company from Colombia. The deal is users can managment your electric car charges in a electric station. Available on App Store.",
    techItems: [
      "Xcode",
      "Swift",
      "AWS SDK",
      "Google Maps",
      "Facebook Sing In",
      "Google Sing In",
      "APNS",
    ],
  },
];

export default projects;
