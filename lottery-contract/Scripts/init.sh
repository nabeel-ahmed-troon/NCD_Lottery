echo "===========================================";
echo "Running Script for Deployment of Contract";
echo "===========================================";


echo "Enter Contract Id : ";
read CONTRACT_ID

near call $CONTRACT_ID new '' --accountId $CONTRACT_ID
