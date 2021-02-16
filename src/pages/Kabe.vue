<template>
    <div class="konteiner">

        <div class="game-field">
            <div
                    v-for="nr in 13" :key="nr"
                    class="field-item"
            >
                tere {{nr}}
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Kabe",
    }
</script>

<style scoped>
    .konteiner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .game-field{
        display: grid;
        grid-template-columns: repeat(5, 4em);
        gap: 2px;
    }

    .field-item{
        background-color: #b886a6;
        /*
        siin saaks ruudu suuruse defineerida, sisu keskele paigutada jne.
        Sisu saaks keskele paigutada flexboxiga siin.
        display: flex;
        justifiy-content:center;
        align-items:center;
        */
    }
</style>