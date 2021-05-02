import { createProduct, ProductOptions } from "./helpers/objectHelpers";

const newProduct = createProduct({ id: 12, code: "d f g", title: "This is the title of the product, it will be truncated" } as ProductOptions);

console.log(newProduct);
