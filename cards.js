// You can add new scenarios, but make sure that there is exactly...
// * 1 HackerBattle per scenario
// * 3 playerCards per scenario

var scenarios = [
  {
    HackerBattle : {
      description : "I established a fake Wi-Fi hotspot to illicitly obtain individuals' email and monitor their internet activities",
      power : 4,
    },
    playerCards : [
      {
        description : "I always avoid utilizing public Wi-Fi networks.",
        power : 5,
      },
      {
        description : "I explore the internet, yet I refrain from conducting any private affairs when connected to a public Wi-Fi network.",
        power : 3,
      },
      {
        description : "I link up with any accessible public wifi network that I can utilize.",
        power : 1,
      }
    ]
  },
  {
    HackerBattle : {
      description : "I transmitted a counterfeit email pretending to be from your bank, requesting your account information.",
      power : 3,
    },
    playerCards : [
      {
        description : "I verified the email address, and the message was not sent by my bank.",
        power : 5,
      },
      {
        description : "I never disclose personal details when replying to an email.",
        power : 4,
      },
      {
        description : "I have forwarded the information you requested in order for you to review my account.",
        power : 1,
      }
    ]
  },
  {
    HackerBattle : {
      description : "I deduced your place of residence based on the abundance of personal details you divulge on social media platforms.",
      power : 3,
    },
    playerCards : [
      {
        description : "I always refrain from disclosing private details on my social media profiles.",
        power : 5,
      },
      {
        description : "I maintain the privacy of my accounts in a way that limits their visibility to my friends exclusively.",
        power : 4,
      },
      {
        description : "I label everything, so my friends are always aware of my activities.",
        power : 1,
      }
    ]
  },
  {
    HackerBattle : {
      description : "I observed you entering your password and gained unauthorized access to your account.",
      power : 2,
    },
    playerCards : [
      {
        description : "My passwords for each of my other accounts are unique and not the same.",
        power : 4,
      },
      {
        description : "I updated my password across all my accounts since they had identical ones.",
        power : 2,
      },
      {
        description : "I erased that account and created a fresh one. ",
        power : 1,
      }
    ]
  },
  {
    HackerBattle : {
      description : "I checked your internet activity on your mobile device to observe what you have been doing on the web.",
      power : 2,
    },
    playerCards : [
      {
        description : "My browsing history is never stored because I consistently use a private browser.",
        power : 4,
      },
      {
        description : "I configured my browser to erase my browsing history each time I close it.",
        power : 3,
      },
      {
        description : "I avoid deleting my browsing history as I find it cumbersome to type lengthy website addresses.",
        power : 1,
      }
    ]
  }, 

  {
    HackerBattle : {
      description : "I gained unauthorized access to your system and have erased all of your data..",
      power : 2,
    },
    playerCards : [
      {
        description : "I adhere to the 3-2-1 backup strategy and keep backup copies of my data in both physical and remote locations, utilizing cloud storage as my off-site backup solution.",
        power : 4,
      },
      {
        description : "My data is saved both on a local and an external hard drive as a backup.",
        power : 3,
      },
      {
        description : "I did not make any copies or duplicates of my data for safekeeping at any point in time.",
        power : 1,
      }
    ]
  }, 

  {
    HackerBattle : {
      description : "I gave you my USB device to transfer content.",
      power : 2,
    },
    playerCards : [
      {
        description : "To safeguard my system, I employ both antivirus protection and a firewall.",
        power : 4,
      },
      {
        description : "I declined to use your USB drive because my system did not have any antivirus protection or firewall.",
        power : 3,
      },
      {
        description : "I employed your USB because I do not have any apprehensions about my system getting damaged.",
        power : 1,
      }
    ]
  }, 
  {
    HackerBattle : {
      description : "My intention is to harm your system by using malicious software like ransomware, malware, and data breaches.",
      power : 2,
    },
    playerCards : [
      {
        description : "I'm sorry, but you won't be able to do that because I have enabled the Automatic Updates feature for my operating system.",
        power : 4,
      },
      {
        description : "I utilize web browsers like Chrome or Firefox which regularly receive automatic security updates.",
        power : 3,
      },
      {
        description : "I neither update my software nor install security updates.",
        power : 1,
      }
    ]
  }
];