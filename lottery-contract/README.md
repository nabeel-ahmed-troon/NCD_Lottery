# Lottery System Contracts

You can perform lottery operations through shell scripts from Scripts folder.

## Building

To build run:

```bash
.Scripts/build.sh
```

## Run Scripts in Order as Described below

To deploy run:

```bash
./Scripts/deploy.sh
```

If you want this work properly don't deploy I've already deployed contract.

Initialize contract run(Already Initialized):

```bash
./Scripts/init.sh
```

Start Lottery run(Only Admin):

```bash
./Scripts/startLottery.sh
```

Deposit Storage run:

```bash
./Scripts/depositStorage.sh
```

When new user comes for the first time, he has to run this script once to deposit storage.

Get Airdrop of Tokens run:

```bash
./Scripts/airdrop.sh
```

Buy Lottery Tickets run:

```bash
./Scripts/buyTicket.sh
```

Pick Winner of Lottery run(Only Admin):

```bash
./Scripts/airdrop.sh
```

Claim Reward run(Only Winner):

```bash
./Scripts/claimReward.sh
```

There are also view functions in Lottery Contract in src/enumeration.rs. You can also view them using cli.

## Testing

To test run:

```bash
cargo test
```
