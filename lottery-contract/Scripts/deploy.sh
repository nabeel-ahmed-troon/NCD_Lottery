echo "===========================================";
echo "Running Script for Deployment of Contract";
echo "===========================================";


echo "Enter Account Id in which you want to deploy contract : ";
read CONTRACT_ID

near deploy --accountId $CONTRACT_ID --wasmFile ../res/lottery_contract.wasm


