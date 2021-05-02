import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers";

export interface ProductOptions {
	id: number;
	code: string;
	title: string;
  };

export function createProduct({id, code, title }: ProductOptions): ProductOptions {
	return {
		id: id,
		code: makeUppercase(code),
		title: limitLength(12, replaceSpaces(title)),
	};
}
