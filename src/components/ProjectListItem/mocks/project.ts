import { Project } from "../../../types/Project"

export const project: Project = {
  short_description:
    "Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
  name: "Sample",
  start_date: "",
  end_date: "",
  id: 1,
  image: require("../../../assets/images/placeholder.png"),
  image_alt_text: "",
  categories: [
    {
      id: 1,
      icon_name: "mapbox",
      name: "mapbox",
    },
    {
      id: 2,
      icon_name: "smartphone",
      name: "mobile",
    },
    {
      id: 3,
      icon_name: "react",
      name: "react",
    },
    {
      id: 4,
      icon_name: "typescript",
      name: "typescript",
    },
  ],
  content_columns: [],
}
