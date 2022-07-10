import { ContentBlock } from "../../../types/ContentBlock"

export const contentBlocks: ContentBlock[] = [
  {
    id: 1,
    value: "",
    alt_text: "",
    created_at: "",
    display_value: "A title",
    order: 1,
    type: "title",
  },
  {
    id: 2,
    value: "",
    alt_text: "",
    created_at: "",
    display_value: "A subtitle",
    order: 2,
    type: "sub_title",
  },
  {
    id: 3,
    value: "",
    alt_text: "",
    created_at: "",
    order: 3,
    type: "paragraph",
    display_value:
      "Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  },
  {
    id: 4,
    value: require("../../../assets/images/placeholder.png"),
    alt_text: "This is an image",
    created_at: "",
    order: 4,
    type: "image",
    display_value: "",
  },
  {
    id: 5,
    value: "https://www.google.com",
    alt_text: "",
    created_at: "",
    order: 5,
    type: "url",
    display_value: "Website",
  },
]
