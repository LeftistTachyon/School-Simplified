/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-default-export */
import { Accordion } from "@chakra-ui/react";
import FaqItem from "@components/contact/faq-item";
import { QAPair } from "types";

/**
 * ### Creates a list-like view of all the questions and answers in the FAQ.
 * Each question and answer is placed in a dropdown/accordion.
 * 
 * The props passed to this element must be as follows:
 * ```
 * {
				list: [
					{
						question: string;
						answer: [
							{
								text: string;
								link: string;
							}
						];
					}
				];
	}
	```
 * 
 * @param {{list: QAPair[]}} props the props to pass to this FAQ list element
 * @param {QAPair[]} props.list the entire list of questions and answers to include as part of this FAQ list
 * @returns a JSX element that represents all the questions and answers that are passed to this element
 */
export default function FaqList({ list }: { list: QAPair[] }): JSX.Element {
	return (
		<Accordion allowMultiple zIndex={0}>
			{list.map(({ question, answer }): JSX.Element => {
				return (
					<FaqItem
						key={question}
						question={question}
						answers={answer}
					/>
				);
			})}
		</Accordion>
	);
}
