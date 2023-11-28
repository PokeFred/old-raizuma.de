<div class="w-auto h-auto text-3xl lg:text-6xl text-center">So schnell wie der Blitz</div>
<div class="mt-2 w-auto h-auto text-xl lg:text-2xl text-center">Raizuma, das Team der Ewigkeit und deutschen Übersetzungen</div>



<script lang="ts">
    /* https://www.npmjs.com/package/mysql2 */
    import mysql from "mysql2"

    const db = mysql.createConnection({
        host: "raizuma.de:3306",
        user: "hachiro181606_",
        password: "Hachiro0412",
        database: "hachiro181606_"
    })

    db.connect((err) => console.log(err))
    db.query("SELECT * FROM user", (err, result, fields) => {})
</script>



<div class="mt-8 text-xl lg:text-2xl text-center">Last Raizuma Direct (19.07.2023):</div>
<!-- svelte-ignore a11y-missing-attribute -->
<iframe src="https://www.youtube.com/embed/jn6YopbTPf8" class="mt-2 mx-auto w-full max-w-sm h-56 rounded-2xl" />
