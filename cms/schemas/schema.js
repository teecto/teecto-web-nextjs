// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import navItem from "./navItem";
import navSubItem from "./navSubItem";
import navProject from "./navProject";
import technology from "./technology";
import post from "./post";


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    navItem,
    navSubItem,
    navProject,
    category,
    technology,
    post,
    blockContent,
  ]),
});
