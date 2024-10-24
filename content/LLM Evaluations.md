Evaluations are the equivalent to testing, but for [[LLM]]s. Basically you put an LLM after your main generation pipeline (usually [[RAG]]) to evaluate how did it do.

There are many tools for this, but I usually use [DeepEval](https://docs.confident-ai.com/).

One of the cool features of DeepEval is that it has many built-in evaluation metrics. E.g. summarization, relevancy, faithfulness, precision, recall, tool correctness, hallucination, bias, toxicity, and so on.

Here's an example evaluating relevancy:

```py
def test_answer_relevancy():
    answer_relevancy_metric = AnswerRelevancyMetric(threshold=0.5)

    input = "Can you explain the humor behind the phrase 'UNIX is user-friendly; it's just selective about who its friends are'?"

    retrieval_context = [
        """
    I have a natural revulsion to any operating system 
    that shows so little planning as to have to named 
    all of its commands after digestive noises 
    (awk, grep, fsck, nroff). —Unknown

    The Unix “power tool” metaphor is a canard. 
    It’s nothing more than a slogan behind which Unix hides 
    its arcane patchwork of commands and ad hoc utilities. 
    A real power tool amplifies the power of its user with little 
    additional effort or instruction. Anyone capable of using 
    screwdriver or drill can use a power screwdriver or power drill. 
    The user needs no understanding of electricity, motors, torquing, 
    magnetism, heat dissipation, or maintenance. She just needs to plug 
    it in, wear safety glasses, and pull the trigger. Most people even 
    dispense with the safety glasses. It’s rare to find a power tool 
    that is fatally flawed in the hardware store: most badly designed 
    power tools either don’t make it to market or result in costly 
    lawsuits, removing them from the market and punishing their makers.
    """
    ]

    results = my_rag.invoke(input)
    actual_output = results["answer"]

    test_case = LLMTestCase(
        input=input,
        # Replace this with the actual output of your LLM application
        actual_output=actual_output,
        retrieval_context=retrieval_context,
    )
    assert_test(test_case, [answer_relevancy_metric])
```