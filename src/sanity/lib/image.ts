import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => builder.image(source);
export default urlFor;
