echo "===========================================";
echo "Running Script for Buying Multiple Tickets ";
echo "===========================================";

echo "Enter Your Account Id : "
read ID
echo "How many tickets you want to buy";
read NUM

for i in {0..NUM}
do
near call lottery_ft.testnet ft_transfer_call '{"receiver_id":"lottery_project.testnet","amount":"1000000000000000000000000","memo":"Buying Lottery Ticker","msg":"Lottery ticket"}' --accountId $ID --depositYocto=1 --gas=300000000000000
done