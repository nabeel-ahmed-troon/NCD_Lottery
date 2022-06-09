echo "===========================================";
echo "Running Script for Getting Airdrop of FTs";
echo "===========================================";

echo "Enter Your Account Id : "
read ID
near call lottery_ft.testnet ft_airdrop  --accountId $ID 