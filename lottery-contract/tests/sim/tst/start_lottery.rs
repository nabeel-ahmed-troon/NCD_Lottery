#[test]
fn start_lottery(){
    let initial_balance=to_yocto("10000000000");
    let (_, _, lottery, _,alice,_) = init(initial_balance);
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
}