import { ContentBlock } from "../../../types/ContentBlock"

export const contentBlocks: ContentBlock[] = [
  {
    id: 1,
    value: "",
    alt_text: "",
    display_value: "A title",
    order: 1,
    className: "",
    type: "title",
  },
  {
    id: 2,
    value: "",
    alt_text: "",
    display_value: "A subtitle",
    order: 2,
    className: "",
    type: "sub_title",
  },
  {
    id: 3,
    value: "",
    alt_text: "",
    order: 3,
    className: "",
    type: "paragraph",
    display_value:
      "Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  },
  {
    id: 4,
    value: require("../../../assets/images/placeholder.png"),
    alt_text: "This is an image",
    order: 4,
    className: "",
    type: "image",
    display_value: "",
  },
  {
    id: 5,
    value: "https://www.google.com",
    alt_text: "",
    order: 5,
    className: "",
    type: "url",
    display_value: "Website",
  },
]
