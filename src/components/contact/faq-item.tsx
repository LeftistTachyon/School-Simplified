/* eslint-disable import/no-default-export */
import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Flex,
} from "@chakra-ui/react";
import NextLink from "@components/nextChakra";
import { AnswerPart } from "types";

type FaqItemProps = {
	question: string;
	answers: AnswerPart[];
};

/**
 * ### Creates an element that visually displays a question and answer.
 * The answer may have links. See {@link AnswerPart} for more information.
 *
 * @param {FaqItemProps} props the props needed to render this FaqItem
 * @param {string} props.question the question
 * @param {AnswerPart[]} props.answers the text fragments that compose the answer text
 * @returns the JSX element that represents a question and answer in an FAQ section
 */
export default function FaqItem({
	question,
	answers,
}: FaqItemProps): JSX.Element {
	return (
		<AccordionItem
			boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
			rounded={10}
			backgroundColor="white"
			color="#5a60ad"
			px={2}
			py={1}
			mb={5}
		>
			<AccordionButton
				_hover={{ backgroundColor: "transparent", boxShadow: "none" }}
				_active={{ boxShadow: "none" }}
				_focus={{ boxShadow: "none " }}
			>
				<Flex textAlign="left" flex="1" fontWeight="bold">
					{question}
				</Flex>
				<AccordionIcon color="#424242" />
			</AccordionButton>
			<AccordionPanel pb={4}>
				{answers.map((answer: AnswerPart) => {
					if (answer.link) {
						return (
							<NextLink
								href={answer.link}
								key={answer.text}
								color="brand.gold2"
							>
								{answer.text}
							</NextLink>
						);
					} else {
						return answer.text;
					}
				})}
			</AccordionPanel>
		</AccordionItem>
	);
}
