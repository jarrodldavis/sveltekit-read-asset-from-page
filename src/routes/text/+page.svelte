<script>
    import url from './lorem-ipsum.txt?url';

    console.log('url:', url);

    if (import.meta.env.SSR) {
        async function read_and_print() {
            const { read } = await import("$app/server");
            const response = read(url);
            const text = await response.text();
            console.log('text:', text);
        }
        read_and_print();
    }
</script>

<a download="lorem-ipsum.txt" href={url}>Download Text</a>
