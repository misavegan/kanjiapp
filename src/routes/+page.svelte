<script lang="ts">
    import type { Kanji, KanjiOption } from "../lib/types/index";
    import { onMount } from "svelte";
    import {kanjis} from "../lib/const/kanji"

    let kanji: Kanji | undefined;
    let kanjiOption: KanjiOption | undefined
    let isCorrect: boolean | undefined

    const selectKanji = () => {
        const randomKanjiIndex = Math.floor(Math.random() * kanjis.length)
        kanji = kanjis[randomKanjiIndex]
        
        const randomOptionIndex = Math.floor(Math.random() * kanjis.length)
        kanjiOption = kanji.options[randomOptionIndex]

    }

    onMount(() => {
        selectKanji()
        console.log("selected kanji is:", kanji)
    })

    const reset = () => {
        selectKanji()
        isCorrect = undefined
    }

    const submit = (answer: boolean, kanjiCorrect: boolean | undefined) => {
        isCorrect = kanjiCorrect === answer
    }

</script>

<h1>Welcome to Kanji App</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

{#if kanji && kanjiOption}

    <div>
        <p>Kanji: {kanji.kanji}</p>
        <p>Option: {kanjiOption.kanji}</p>
        <button on:click={() => submit(true, kanjiOption?.isCorrect)}>Correct</button>
        <button on:click={() => submit(false, kanjiOption?.isCorrect)}>Incorrect</button>
    </div>

    {#if isCorrect}
        Your answer is: {JSON.stringify(isCorrect)}
    {/if}

{/if}

<button on:click={() => reset()}>Reset</button>