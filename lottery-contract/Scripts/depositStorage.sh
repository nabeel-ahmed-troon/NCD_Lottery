echo "===========================================";
echo "Running Script for Deposit Storage";
echo "===========================================";

echo "Enter your Account Id: ";
read ACCOUNT_ID;
near call lottery_ft.testnet storage_deposit '' --accountId $ACCOUNT_ID --amount 0.0025