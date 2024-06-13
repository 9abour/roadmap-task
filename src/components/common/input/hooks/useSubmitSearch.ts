import { FormEvent } from "react";
import { ISubmitSearchHookProps } from "../types";
import { useRouter } from "next/navigation";

export const useSubmitSearch = ({
	searchProps,
	setFormIsActive,
	reset,
}: ISubmitSearchHookProps) => {
	const { push } = useRouter();

	const handleOnSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (searchProps) {
			push(`/search/p=${searchProps}`);
			setFormIsActive(false);

			reset();
		}
	};

	return {
		submit: handleOnSubmit,
	};
};
