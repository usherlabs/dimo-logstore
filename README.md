# Query DIMO Vehicles Data Using Log Store

This project demonstrates a simple method to query DIMO vehicles data using Log Store. Our team has previously staked this specific stream, enabling it to be queried by anyone. However, it's important to note that decryption is only possible by those permitted by the stream owner, as this is a private stream. If you're interested in learning how to store or query your own streams, please refer to the [Log Store Docs](https://docs.logstore.usher.so/).


## Requirements

- Node 18+
- A wallet with some tokens staked for query at Log Store. See [Log Store Docs](https://docs.logstore.usher.so/network/cli/query-stake) for more information.

## Usage

1. Install dependencies
    ```bash
    pnpm install # or any other node package manager
    ```
2. Copy `.env.example` to `.env` and fill in the values
3. Run the query
    ```bash
    pnpm query
    ```

## Resources
- [DIMO](https://dimo.zone/)
- [Log Store Docs](https://docs.logstore.usher.so/)
- [Streamr](https://streamr.network/)