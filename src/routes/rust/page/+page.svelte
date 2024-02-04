<script>
    import { greet as page_and_endpoint_greet } from '$lib/page-and-endpoint/Cargo.toml';
    import { greet as page_only_greet } from '$lib/page-only/Cargo.toml';

    page_and_endpoint_greet();
    page_only_greet();
</script>

<button type="button" on:click={page_only_greet}>Greet (Page Only)</button>
<button type="button" on:click={page_and_endpoint_greet}>Greet (Page and Endpoint)</button>
