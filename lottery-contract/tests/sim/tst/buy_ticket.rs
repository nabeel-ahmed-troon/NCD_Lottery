#[test]
fn buy_ticket(){
    let initial_balance=to_yocto("10000000000");
    let (root, ftt, lottery, nft,alice,nabeel) = init(initial_balance);
    //<=================================================================>
    //                      STARTING A LOTTERY
    //<=================================================================>
    call!(
        alice,
        lottery.start_new_lottery(5,U128::from(1000000000000000000000000),"ft".to_string().parse().unwrap(),"nft".to_string().parse().unwrap())
    ).assert_success();

    //GETTING LOTTERY STATE TO CHECK WHETHER IT STARTED OR NOT
    let res= view!(lottery.get_lottery_state()).unwrap_json_value();
    // println!("Lottery state is {}",res);
    assert!(res=="Open".to_string());

    //<=================================================================>
    //             DEMO ACCOUNT CREATION FOR GETTING AIRDROP
    //<=================================================================>
    let demo=root.create_user("demo_account".to_string().parse().unwrap(), to_yocto("1000"));
    register_user(&demo);

    

    //<=================================================================>
    //                  STORAGE DEPOSIT FOR LOTTERY CONTRACT
    //            IF NOT THEN WE CANNOT SEND TOKENS TO LOTTERY CONTRACT
    //<=================================================================>
    call!(
        demo,
        ftt.storage_deposit(Some("lottery".to_string().parse().unwrap()),None),
        deposit=to_yocto("3")
    ).assert_success();

     //<=================================================================>
    //                  TRANSFERING FUNGIBLE TOKEN 
    //              TO LOTTERY CONTRACT FOR AIRDROPING
    //<=================================================================>
    let _amount= to_yocto("1000");
    call!(
        root,
        ftt.ft_transfer(lottery.account_id(),U128::from(_amount),Some("Testing Fungible Token".to_string())),
        deposit=1 
    ).assert_success();

    //<=================================================================>
    //              AIRDROP FUNCTIONALITY CHECKING
    //<=================================================================>
    let check= view!(ftt.ft_balance_of(demo.account_id())).unwrap_json_value();
    println!("balance of DEMO befor airdrop : {}",check);
    //GETTING AIRDROP FOR LOTTERY PARTICIPATIOIN
    call!(
        demo,
        lottery.ft_airdrop()
    ).assert_success();
    //<=================================================================>
    //              GETTING BALANCE OF AFTER AIRDROP
    //<=================================================================>
    let check= view!(ftt.ft_balance_of(demo.account_id())).unwrap_json_value();
    println!("balance of DEMO after airdrop : {}",check);
    assert_eq!(check,"5000000000000000000000000".to_string(),"Testing Airdrop worked or not");

    //<=================================================================>
    //                      BUYING LOTTERY TICKETS
    //<=================================================================>
    for i in 1..6{
        call!(
            demo,
    
            ftt.ft_transfer_call(lottery.account_id(),U128::from(1000000000000000000000000),None,"lottery buying hurah!".to_string()),
            deposit=1
        ).assert_success();
    }

    for i in 1..6{
        call!(
            root,
    
            ftt.ft_transfer_call(lottery.account_id(),U128::from(1000000000000000000000000),None,"lottery buying hurah!".to_string()),
            deposit=1
        ).assert_success();
    }

    // let res= view!(lottery.ticket_owner(demo.account_id())).unwrap_json_value();
    // println!("tikcet owner {} ",res);

    // let res= view!(lottery.all_ticket_owner()).unwrap_json_value();
    // println!("tikcet owner {} ",res);

}