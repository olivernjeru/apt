# Knowledge Representation and Reasoning

## Types of knowledge:

* Meta: knowledge about knowledge
* Heuristic: rule of thumb. Is representing knowledge of some experts in a field or subject
* Declarative: object facts. It is knowledge to know about something.
* Structural: defines relationship that exists between objects and concepts
* Procedural(imperative): rule procedure. Responsible for knowing how to do something

## AI knowledge cycle:

* Perception
* Learning
* Knowledge Representation and Reasoning
* Planning
* Execution

A Knowledge Representation Language is defined by two aspects:

* Syntax describes how to make sentences
* Semantics determines the facts in the world to which the sentences refer to

Inference and reasoning are generally used to cover any processes by which conclusions are reached

## Knowledge Representation Schemes:

* Natural Language
* Rules
* Logic
    * Propositional Logic (Boolean Logic) uses logical connectives and boolean logic. They can reason about the 			world based on proven logic but components cannot be individually examined
	* Predicate Logic (First Order Logic) is an extension of propositional where a function is any object or 			relationship. It has well defined rules for manipulation but cannot handle uncertainty
	Frames are knowledge representation formalisms in which stereotyped information on objects are represented. They can 	cope with missing values but have been hard to implement especially inheritance.
	Semantic Networks are graphical representation of entities and their relationships. They are easy to translate to 	predict calculus but they cannot handle quantifiers

## Problems with natural language:
* It is often ambiguous
* Syntax and semantics are not fully understood
* There is little uniformity in the structure of sentences

## Approaches to knowledge representation:
* Simple Relational Knowledge is the simplest way of storing facts which uses the relational method, and each fact 	about a set of the object is set out systematically in columns
* Inheritable Knowledge stores all data in a hierarchy of classes where elements inherit values from other members of 	a class
* Inferential Knowledge represents knowledge in the form of formal logics and can be used to derive more facts which 	guarantees correctness
* Procedural Knowledge uses small programs and codes which describe how to do specific things, and how to proceed. 	Uses IF-THEN rule in LISP and Prolog

## Requirements for Knowledge Representation Systems:
* Representational Accuracy: should have the ability to represent all kinds of required knowledge
* Inferential Adequacy: should have the ability to manipulate representational structures to produce new knowledge 	corresponding to existing structure
* Inferential Efficiency: should have the ability to direct the inferential knowledge mechanism into the most 	productive direction by storing appropriate guides
* Acquisitional Efficiency: should have the ability to acquire the new knowledge easily using automatic methods

## Dealing with Uncertainities
### Causes of Uncertainities:
* Information occurred from unreliable sources
* Experimental Errors
* Equipment Fault
* Temperature Variation
* Climate Change

Handling uncertainty = Probability + Logic
Need of probabilistic reasoning in AI:
	When there are unpredictable outcomes
	When specifications or possibilities of predicates becomes too large to handle
	When an unknown error occurs during an experiment

Baye's Theorem allows updating the probability prediction of an event by observing new information of the real world
				P(effect|cause)P(cause
	P(cause|effect) = 	P(effect)

Applications of Baye's theorem:
	Calculate the next step of the robot when the already executed step is given
	Weather forecasting
	Solve Monty Hall Problem

Fuzzy Logic is a method of reasoning that resembles human reasoning and is used in NLP and expert systems

### Applications of fuzzy logic:
* Control machines and consumer products
	* May not give accurate reasoning but acceptable reasoning
	* Helps to deal with the uncertainty in engineering
	* Autumotive Systems
	* Consumer Electronic Goods
	* Domestic Goods
	* Environment Control
* Fuzzy Logic Systems Architecture:
	* Fuzzification Module - transforms the system inputs which are crisp numbers into fuzzy sets
	* Knowledge Base - stores IF-THEN rules provided by experts
	* Inference Engine - simulates human reasoning process by making fuzzy inference on the inputs and IF-THEN rules
	* Defuzzification Module - transforms the fuzzy set obtained by the inference engine into a crisp value
### Advantages
* Can work with any type of inputs whether it is imprecise, distorted or noisy input information.
* Is easy and understandable.
* Comes with mathematical concepts of set theory and the reasoning of that is quite simple
* Provides a very efficient solution to complex problems in all fields of life as it resembles human reasoning and 	decision-making.
* Algorithms can be described with little data, so little memory is required
### Disadvantages
* There is no systematic approach to solve a given problem through fuzzy logic.
* Proof of its characteristics is difficult or impossible in most cases because every time we do not get a 	mathematical description of our approach.
* As fuzzy logic works on precise as well as imprecise data so most of the time accuracy is compromised

file handling
iostreaming