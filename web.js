import express from "express";
import accountController from "../controllers/accountController.js";
import homeController from "../controllers/homeController.js";
import winGoController from "../controllers/winGoController.js";
import userController from "../controllers/userController.js";
import middlewareController from "../controllers/middlewareController.js";
import adminController from "../controllers/adminController.js";
import dailyController from "../controllers/dailyController.js";
import k5Controller from "../controllers/k5Controller.js";
import k3Controller from "../controllers/k3Controller.js";
import paymentController from "../controllers/paymentController.js";
import avatior from "../controllers/aviatorController.js";
import jiliGamesController, {
    GAME_CATEGORIES_MAP,
  } from "../controllers/jiliGamesController.js";

let router = express.Router();

const initWebRouter = (app) => {
    // page account
    router.get("/login", accountController.loginPage);
    router.get("/register", accountController.registerPage);
    router.get("/forgot", accountController.forgotPage);
    // router.post("/api/sent/otp/verify", accountController.verifyCode);
    // router.post("/api/sent/otp/verify/reset", accountController.verifyCodePass);
    router.post("/api/resetPasword", accountController.forGotPassword);

    // page home
    router.get("/", (req, res) => {
        return res.redirect("/home");
    });
    router.get("/home", homeController.homePage);

    router.get("/reward", function (req, res) {
        return res.render("reward/index.ejs");
    });

    router.get("/checkIn", middlewareController, homeController.checkInPage);
    router.get("/checkDes", middlewareController, homeController.checkDes);
    router.get(
        "/checkRecord",
        middlewareController,
        homeController.checkRecord
    );
      router.get(
    "/aviator_betting_reward",
    middlewareController,
    homeController.aviatorBettingRewardPage,
  );

  //  router.get("/aviator", middlewareController, userController.aviator)

  // BET aviator

    router.get(
        "/promotion",
        middlewareController,
        homeController.promotionPage
    );
    router.get(
        "/promotion/myTeam",
        middlewareController,
        homeController.promotionmyTeamPage
    );
    router.get(
        "/promotion/promotionDes",
        middlewareController,
        homeController.promotionDesPage
    );
    router.get(
        "/promotion/tutorial",
        middlewareController,
        homeController.tutorialPage
    );
    router.get(
        "/promotion/bonusrecord",
        middlewareController,
        homeController.bonusRecordPage
    );

    router.get("/wallet", middlewareController, homeController.walletPage);
    router.get(
        "/wallet/recharge",
        middlewareController,
        homeController.rechargePage
    );
    router.get(
        "/wallet/tron",
        middlewareController,
        homeController.tronRechargePage
    );
    // router.get(
    //     "/wallet/wepay",
    //     middlewareController,
    //     homeController.wepayRechargePage
    // );
    // router.get(
    //     "/wallet/xdpay",
    //     middlewareController,
    //     homeController.xdpayRechargePage
    // );
    router.get(
        "/wallet/okpay",
        middlewareController,
        homeController.okpayRechargePage
    );
    // router.get(
    //     "/wallet/winpay",
    //     middlewareController,
    //     homeController.winpayRechargePage
    // );
    // router.get(
    //     "/wallet/allpay",
    //     middlewareController,
    //     homeController.allpayRechargePage
    // );
    // router.get(
    //     "/wallet/didapay",
    //     middlewareController,
    //     homeController.didapayRechargePage
    // );
    router.get(
        "/wallet/withdrawal",
        middlewareController,
        homeController.withdrawalPage
    );
    router.get(
        "/wallet/rechargerecord",
        middlewareController,
        homeController.rechargerecordPage
    );
    router.get(
        "/wallet/withdrawalrecord",
        middlewareController,
        homeController.withdrawalrecordPage
    );
    router.get("/wallet/addBank", middlewareController, homeController.addBank);
    router.get(
        "/wallet/addUSDTAddress",
        middlewareController,
        homeController.addUSDTAddress
    );
    router.get("/keFuMenu", middlewareController, homeController.keFuMenu);

    router.get("/mian", middlewareController, homeController.mianPage);

    router.get("/app", homeController.downloadApk);

    router.get("/about", middlewareController, homeController.aboutPage);
    router.get(
        "/redenvelopes",
        middlewareController,
        homeController.redenvelopes
    );
    router.get("/mian/forgot", middlewareController, homeController.forgot);
    router.get("/newtutorial", homeController.newtutorial);
    router.get("/about/privacyPolicy", homeController.privacyPolicy);
    router.get(
        "/about/riskAgreement",
        middlewareController,
        homeController.riskAgreement
    );

    router.get(
        "/myProfile",
        middlewareController,
        homeController.myProfilePage
    );

    // BET wingo
    router.get("/win", middlewareController, winGoController.winGoPage);
    router.get("/win/3", middlewareController, winGoController.winGoPage3);
    router.get("/win/5", middlewareController, winGoController.winGoPage5);
    router.get("/win/10", middlewareController, winGoController.winGoPage10);

    // BET K5D
    router.get("/5d", middlewareController, k5Controller.K5DPage);
    router.post(
        "/api/webapi/action/5d/join",
        middlewareController,
        k5Controller.betK5D
    ); // register
    router.post(
        "/api/webapi/5d/GetNoaverageEmerdList",
        middlewareController,
        k5Controller.listOrderOld
    ); // register
    router.post(
        "/api/webapi/5d/GetMyEmerdList",
        middlewareController,
        k5Controller.GetMyEmerdList
    ); // register

    // BET K3
    router.get("/k3", middlewareController, k3Controller.K3Page);
    router.post(
        "/api/webapi/action/k3/join",
        middlewareController,
        k3Controller.betK3
    ); // register
    router.post(
        "/api/webapi/k3/GetNoaverageEmerdList",
        middlewareController,
        k3Controller.listOrderOld
    ); // register
    router.post(
        "/api/webapi/k3/GetMyEmerdList",
        middlewareController,
        k3Controller.GetMyEmerdList
    ); // register

    // login | register
    router.post("/api/webapi/login", accountController.login); // login
    router.post("/api/webapi/register", accountController.register); // register
    router.get(
        "/api/webapi/GetUserInfo",
        middlewareController,
        userController.userInfo
    ); // get info account
    router.put(
        "/api/webapi/change/userInfo",
        middlewareController,
        userController.changeUser
    ); // get info account
    router.put(
        "/api/webapi/change/pass",
        middlewareController,
        userController.changePassword
    ); // get info account

    // bet wingo
    router.post(
        "/api/webapi/action/join",
        middlewareController,
        winGoController.betWinGo
    ); // register
    router.post(
        "/api/webapi/GetNoaverageEmerdList",
        middlewareController,
        winGoController.listOrderOld
    ); // register
    router.post(
        "/api/webapi/GetMyEmerdList",
        middlewareController,
        winGoController.GetMyEmerdList
    ); // register

    // promotion
    router.post(
        "/api/webapi/promotion",
        middlewareController,
        userController.promotion
    ); // register
    router.post(
        "/api/webapi/checkIn",
        middlewareController,
        userController.checkInHandling
    ); // register
    router.post(
        "/api/webapi/check/Info",
        middlewareController,
        userController.infoUserBank
    ); // register
    router.post(
        "/api/webapi/addBank",
        middlewareController,
        userController.addBank
    ); // register
    router.post(
        "/api/webapi/addUSDTAddress",
        middlewareController,
        userController.addUSDTAddress
    );
    // router.post(
    //     "/api/webapi/otp",
    //     middlewareController,
    //     userController.verifyCode
    // ); // register
    router.post(
        "/api/webapi/use/redenvelope",
        middlewareController,
        userController.useRedenvelope
    ); // register



    router.get(
        "/wallet/paynow/manual_upi",
        middlewareController,
        paymentController.initiateManualUPIPayment,
      );
      router.get(
        "/wallet/paynow/manual_usdt",
        middlewareController,
        paymentController.initiateManualUSDTPayment,
      );
      router.post(
        "/wallet/paynow/manual_upi_request",
        middlewareController,
        paymentController.addManualUPIPaymentRequest,
      );
      router.post(
        "/wallet/paynow/manual_usdt_request",
        middlewareController,
        paymentController.addManualUSDTPaymentRequest,
      );
      router.post(
        "/wallet/paynow/wowpay",
        middlewareController,
        paymentController.initiateWowPayPayment,
      );
      router.post(
        "/wallet/verify/wowpay",
        middlewareController,
        paymentController.verifyWowPayPayment,
      );
      router.get(
        "/wallet/verify/wowpay",
        middlewareController,
        paymentController.verifyWowPayPayment,
      );
      router.post(
        "/wallet/paynow/upi",
        middlewareController,
        paymentController.initiateUPIPayment,
      );
      router.get(
        "/wallet/verify/upi",
        middlewareController,
        paymentController.verifyUPIPayment,
      );
      router.get(
        "/wallet/paynow/rspay",
        middlewareController,
        paymentController.initiateRspayPayment,
      );
      router.post("/wallet/verify/rspay", paymentController.verifyRspayPayment);
    
      router.get(
        "/wallet/paynow/upay",
        middlewareController,
        paymentController.initiateUpayPayment,
      );
      router.post("/wallet/verify/upay", paymentController.verifyUpayPayment);
    


    // wallet
    router.get("/api/webapi/currentUSDT", userController.currentUSDTPrice);
    router.post(
        "/api/webapi/confirmUSDTTransaction",
        userController.confirmUSDTTransaction
    );
    // router.post(
    //     "/api/webapi/initiateDidapayPayment",
    //     middlewareController,
    //     userController.initiateDidapayPayment
    // );
    // router.post(
    //     "/api/webapi/didapayPaymentNotification",
    //     userController.confirmDidapayPayment
    // );
    // router.post(
    //     "/api/webapi/didapayWithdrawlNotification",
    //     userController.confirmDidapayWithdrawl
    // );
    // router.post(
    //     "/api/webapi/initiateWepayPayment",
    //     middlewareController,
    //     userController.initiateWepayPayment
    // );
    // router.post(
    //     "/api/webapi/wepayPaymentNotification",
    //     userController.confirmWepayPayment
    // );
    // router.post(
    //     "/api/webapi/wepayWithdrawlNotification",
    //     userController.confirmWepayWithdrawl
    // );
    // router.post(
    //     "/api/webapi/initiateAllpayPayment",
    //     middlewareController,
    //     userController.initiateAllpayPayment
    // );
    // router.post(
    //     "/api/webapi/allpayPaymentNotification",
    //     userController.confirmAllpayPayment
    // );
    // router.post(
    //     "/api/webapi/allpayWithdrawlNotification",
    //     userController.confirmAllpayWithdrawl
    // );
    // router.post(
    //     "/api/webapi/initiateXdpayPayment",
    //     middlewareController,
    //     userController.initiateXdpayPayment
    // );
    // router.post(
    //     "/api/webapi/xdpayPaymentNotification",
    //     userController.confirmXdpayPayment
    // );
    // router.post(
    //     "/api/webapi/xdpayWithdrawlNotification",
    //     userController.confirmXdpayWithdrawl
    // );
    router.post(
        "/api/webapi/initiateOkpayPayment",
        middlewareController,
        userController.initiateOkpayPayment
    );
    router.post(
        "/api/webapi/okpayPaymentNotification",
        userController.confirmOkpayPayment
    );
    router.post(
        "/api/webapi/okpayWithdrawlNotification",
        userController.confirmOkpayWithdrawl
    );
    router.post(
        "/api/webapi/recharge",
        middlewareController,
        userController.recharge
    ); // register
    router.get(
        "/api/webapi/myTeam",
        middlewareController,
        userController.listMyTeam
    ); // register
    router.get(
        "/api/webapi/recharge/list",
        middlewareController,
        userController.listRecharge
    ); // register
    router.get(
        "/api/webapi/withdraw/list",
        middlewareController,
        userController.listWithdraw
    ); // register
    router.post(
        "/api/webapi/recharge/check",
        middlewareController,
        userController.recharge2
    ); // register
    router.post(
        "/api/webapi/withdrawal",
        middlewareController,
        userController.withdrawal3
    ); // register
    router.post(
        "/api/webapi/callback_bank",
        middlewareController,
        userController.callback_bank
    ); // register

    router.post(
        "/api/webapi/search",
        middlewareController,
        userController.search
    ); // register

    // daily
    router.get(
        "/manager/index",
        dailyController.middlewareDailyController,
        dailyController.dailyPage
    );
    router.get(
        "/manager/listRecharge",
        dailyController.middlewareDailyController,
        dailyController.listRecharge
    );
    router.get(
        "/manager/listWithdraw",
        dailyController.middlewareDailyController,
        dailyController.listWithdraw
    );
    router.get(
        "/manager/members",
        dailyController.middlewareDailyController,
        dailyController.listMeber
    );
    router.get(
        "/manager/profileMember",
        dailyController.middlewareDailyController,
        dailyController.profileMember
    );
    router.get(
        "/manager/settings",
        dailyController.middlewareDailyController,
        dailyController.settingPage
    );
    router.get(
        "/manager/gifts",
        dailyController.middlewareDailyController,
        dailyController.giftPage
    );
    router.get(
        "/manager/support",
        dailyController.middlewareDailyController,
        dailyController.support
    );
    router.get(
        "/manager/member/info/:phone",
        dailyController.middlewareDailyController,
        dailyController.pageInfo
    );

    router.post(
        "/manager/member/info/:phone",
        dailyController.middlewareDailyController,
        dailyController.userInfo
    );
    router.post(
        "/manager/member/listRecharge/:phone",
        dailyController.middlewareDailyController,
        dailyController.listRechargeMem
    );
    router.post(
        "/manager/member/listWithdraw/:phone",
        dailyController.middlewareDailyController,
        dailyController.listWithdrawMem
    );
    router.post(
        "/manager/member/redenvelope/:phone",
        dailyController.middlewareDailyController,
        dailyController.listRedenvelope
    );
    router.post(
        "/manager/member/bet/:phone",
        dailyController.middlewareDailyController,
        dailyController.listBet
    );

    router.post(
        "/manager/settings/list",
        dailyController.middlewareDailyController,
        dailyController.settings
    );
    router.post(
        "/manager/createBonus",
        dailyController.middlewareDailyController,
        dailyController.createBonus
    );
    router.post(
        "/manager/listRedenvelops",
        dailyController.middlewareDailyController,
        dailyController.listRedenvelops
    );

    router.post(
        "/manager/listRecharge",
        dailyController.middlewareDailyController,
        dailyController.listRechargeP
    );
    router.post(
        "/manager/listWithdraw",
        dailyController.middlewareDailyController,
        dailyController.listWithdrawP
    );

    router.post(
        "/api/webapi/statistical",
        dailyController.middlewareDailyController,
        dailyController.statistical
    );
    router.post(
        "/manager/infoCtv",
        dailyController.middlewareDailyController,
        dailyController.infoCtv
    ); // get info account
    router.post(
        "/manager/infoCtv/select",
        dailyController.middlewareDailyController,
        dailyController.infoCtv2
    ); // get info account
    router.post(
        "/api/webapi/manager/listMember",
        dailyController.middlewareDailyController,
        dailyController.listMember
    ); // get info account

    router.post(
        "/api/webapi/manager/buff",
        dailyController.middlewareDailyController,
        dailyController.buffMoney
    ); // get info account

    // admin
    router.get(
        "/admin/manager/index",
        adminController.middlewareAdminController,
        adminController.adminPage
    ); // get info account
    router.get(
        "/admin/manager/index/3",
        adminController.middlewareAdminController,
        adminController.adminPage3
    ); // get info account
    router.get(
        "/admin/manager/index/5",
        adminController.middlewareAdminController,
        adminController.adminPage5
    ); // get info account
    router.get(
        "/admin/manager/index/10",
        adminController.middlewareAdminController,
        adminController.adminPage10
    ); // get info account
       router.get("/admin/manager/aviator", adminController.middlewareAdminController, adminController.adminPageAviator)

    router.get(
        "/admin/manager/5d",
        adminController.middlewareAdminController,
        adminController.adminPage5d
    ); // get info account
    router.get(
        "/admin/manager/k3",
        adminController.middlewareAdminController,
        adminController.adminPageK3
    ); // get info account

    router.get(
        "/admin/manager/members",
        adminController.middlewareAdminController,
        adminController.membersPage
    ); // get info account
    router.get(
        "/admin/manager/createBonus",
        adminController.middlewareAdminController,
        adminController.giftPage
    ); // get info account
    router.get(
        "/admin/manager/ctv",
        adminController.middlewareAdminController,
        adminController.ctvPage
    ); // get info account
    router.get(
        "/admin/manager/ctv/profile/:phone",
        adminController.middlewareAdminController,
        adminController.ctvProfilePage
    ); // get info account

    router.get(
        "/admin/manager/settings",
        adminController.middlewareAdminController,
        adminController.settings
    ); // get info account
    router.get(
        "/admin/manager/listRedenvelops",
        adminController.middlewareAdminController,
        adminController.listRedenvelops
    ); // get info account
    router.post('/admin/aviatorResult',adminController.middlewareAdminController,adminController.aviatorResult);
    router.post(
        "/admin/manager/infoCtv",
        adminController.middlewareAdminController,
        adminController.infoCtv
    ); // get info account
    router.post(
        "/admin/manager/infoCtv/select",
        adminController.middlewareAdminController,
        adminController.infoCtv2
    ); // get info account
    router.post(
        "/admin/manager/settings/bank",
        adminController.middlewareAdminController,
        adminController.settingBank
    );
    router.post(
        "/admin/manager/settings/winningAlgorithm",
        adminController.middlewareAdminController,
        adminController.settingWinningAlgorithm
    );
    // get info account
    router.post(
        "/admin/manager/settings/cskh",
        adminController.middlewareAdminController,
        adminController.settingCskh
    ); // get info account
    router.post(
        "/admin/manager/settings/buff",
        adminController.middlewareAdminController,
        adminController.settingbuff
    ); // get info account
    router.post(
        "/admin/manager/create/ctv",
        adminController.middlewareAdminController,
        adminController.register
    ); // get info account
    router.post(
        "/admin/manager/settings/get",
        adminController.middlewareAdminController,
        adminController.settingGet
    ); // get info account
    router.post(
        "/admin/manager/createBonus",
        adminController.middlewareAdminController,
        adminController.createBonus
    ); // get info account

    router.post(
        "/admin/member/listRecharge/:phone",
        adminController.middlewareAdminController,
        adminController.listRechargeMem
    );
    router.post(
        "/admin/member/listWithdraw/:phone",
        adminController.middlewareAdminController,
        adminController.listWithdrawMem
    );
    router.post("/admin/member/aviatorBet/:phone", adminController.middlewareAdminController, adminController.listBetAviator)
    router.post(
        "/admin/member/listF1/:phone",
        adminController.middlewareAdminController,
        adminController.listF1Mem
    );
    router.post(
        "/admin/member/listF2/:phone",
        adminController.middlewareAdminController,
        adminController.listF2Mem
    );
    router.post(
        "/admin/member/listF3/:phone",
        adminController.middlewareAdminController,
        adminController.listF3Mem
    );
    router.post(
        "/admin/member/listF4/:phone",
        adminController.middlewareAdminController,
        adminController.listF4Mem
    );
    router.post(
        "/admin/member/redenvelope/:phone",
        adminController.middlewareAdminController,
        adminController.listRedenvelope
    );
    router.post(
        "/admin/member/bet/:phone",
        adminController.middlewareAdminController,
        adminController.listBet
    );

    router.get(
        "/admin/manager/recharge",
        adminController.middlewareAdminController,
        adminController.rechargePage
    ); // get info account
    router.get(
        "/admin/manager/withdraw",
        adminController.middlewareAdminController,
        adminController.withdraw
    ); // get info account
    router.get(
        "/admin/manager/withdrawUsdt",
        adminController.middlewareAdminController,
        adminController.withdrawUsdt
    ); // get info account
    router.get(
        "/admin/manager/rechargeRecord",
        adminController.middlewareAdminController,
        adminController.rechargeRecord
    ); // get info account
    router.get(
        "/admin/manager/withdrawRecord",
        adminController.middlewareAdminController,
        adminController.withdrawRecord
    ); // get info account
    router.get(
        "/admin/manager/withdrawRecordUsdt",
        adminController.middlewareAdminController,
        adminController.withdrawRecordUsdt
    ); // get info account
    router.get(
        "/admin/manager/statistical",
        adminController.middlewareAdminController,
        adminController.statistical
    ); // get info account
    router.get(
        "/admin/member/info/:id",
        adminController.middlewareAdminController,
        adminController.infoMember
    );

    router.post(
        "/api/webapi/admin/listMember",
        adminController.middlewareAdminController,
        adminController.listMember
    ); // get info account
    router.post(
        "/api/webapi/admin/listctv",
        adminController.middlewareAdminController,
        adminController.listCTV
    ); // get info account
    router.post(
        "/api/webapi/admin/withdraw",
        adminController.middlewareAdminController,
        adminController.handlWithdraw
    ); // get info account
    router.post(
        "/api/webapi/admin/recharge",
        adminController.middlewareAdminController,
        adminController.recharge
    ); // get info account
    router.post(
        "/api/webapi/admin/rechargeDuyet",
        adminController.middlewareAdminController,
        adminController.rechargeDuyet
    ); // get info account
    router.post(
        "/api/webapi/admin/member/info",
        adminController.middlewareAdminController,
        adminController.userInfo
    ); // get info account
    router.post(
        "/api/webapi/admin/statistical",
        adminController.middlewareAdminController,
        adminController.statistical2
    ); // get info account

    router.post(
        "/api/webapi/admin/banned",
        adminController.middlewareAdminController,
        adminController.banned
    ); // get info account

    router.post(
        "/api/webapi/admin/totalJoin",
        adminController.middlewareAdminController,
        adminController.totalJoin
    ); // get info account
    router.post(
        "/api/webapi/admin/change",
        adminController.middlewareAdminController,
        adminController.changeAdmin
    ); // get info account
    router.post(
        "/api/webapi/admin/profileUser",
        adminController.middlewareAdminController,
        adminController.profileUser
    ); // get info account

    // admin 5d
    router.post(
        "/api/webapi/admin/5d/listOrders",
        adminController.middlewareAdminController,
        adminController.listOrderOld
    ); // get info account
    router.post(
        "/api/webapi/admin/k3/listOrders",
        adminController.middlewareAdminController,
        adminController.listOrderOldK3
    ); // get info account
    router.post(
        "/api/webapi/admin/5d/editResult",
        adminController.middlewareAdminController,
        adminController.editResult
    ); // get info account
    router.post(
        "/api/webapi/admin/k3/editResult",
        adminController.middlewareAdminController,
        adminController.editResult2
    ); // get info account
    router.post(
        "/api/webapi/jili/init",
        middlewareController,
        userController.initJili
    );
    router.get(
        "/api/webapi/jili/userInfo",
        // middlewareController,
        userController.getJiliAccountInfo
    );
    router.post(
        "/api/webapi/jili/deposit",
        middlewareController,
        userController.depositJiliBalance
    );
    router.post(
        "/api/webapi/jili/withdraw",
        middlewareController,
        userController.withdrawJiliBalance
    );
    router.post(
        "/api/webapi/jili/login",
        // middlewareController,
        userController.loginJili
    );
    router.post(
        "/api/webapi/kingmaker/init",
        middlewareController,
        userController.initKingmaker
    );
    router.get(
        "/api/webapi/kingmaker/balance",
        middlewareController,
        userController.getKingmakerBalance
    );
    router.post(
        "/api/webapi/kingmaker/deposit",
        middlewareController,
        userController.depositKingmakerBalance
    );
    router.post(
        "/api/webapi/kingmaker/withdraw",
        middlewareController,
        userController.withdrawKingmakerBalance
    );
    router.post(
        "/api/webapi/kingmaker/launch",
        middlewareController,
        userController.lauchKingmakerGame
    );




    // jili game api routes
    router.post("/auth", jiliGamesController.auth);
    router.post("/bet", jiliGamesController.bet);
    router.post("/cancelBet", jiliGamesController.cancelBet);
    router.post("/sessionBet", jiliGamesController.sessionBet);
    router.post("/cancelSessionBet", jiliGamesController.cancelSessionBet);
    router.get("/jili/game_list", jiliGamesController.gameList);
    router.get(
      "/jili/game_link",
      middlewareController,
      jiliGamesController.getGameLink,
    );
    router.get(
      "/jili/slots",
      middlewareController,
      jiliGamesController.gameSlotsPage(GAME_CATEGORIES_MAP.SLOT),
    );
    router.get(
      "/jili/fishing",
      middlewareController,
      jiliGamesController.gameCategoriesPage(GAME_CATEGORIES_MAP.FISHING),
    );
    router.get(
      "/jili/lobby",
      middlewareController,
      jiliGamesController.gameCategoriesPage(GAME_CATEGORIES_MAP.LOBBY),
    );
    router.get(
      "/jili/casino",
      middlewareController,
      jiliGamesController.gameCategoriesPage(GAME_CATEGORIES_MAP.CASINO),
    );
    router.get(
      "/jili/poker",
      middlewareController,
      jiliGamesController.gameCategoriesPage(GAME_CATEGORIES_MAP.POKER),
    );
       router.use('/aviator',middlewareController,homeController.gamePage);
  //  router.use('/dragon',middlewareController,dragonController.userDekh);


  router.post("/bet",avatior.bet)
  router.post("/cashout",avatior.cashout)
  router.get("/nextcrash",avatior.nextCrash)


    return app.use("/", router);
};

const exp = {
    initWebRouter,
};

export default exp;
