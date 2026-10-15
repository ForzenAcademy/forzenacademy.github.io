const u=[["apartment","A new place to settle","あたらしい暮らし","Familiar sounds. More to say.","n4-apartment","#e6edf4","#637f9d","Explain a situation, use plain forms inside polite speech, and ask for help."],["studio","Room for a new hobby","できること","A little practice opens possibilities.","n4-workshop","#eee9dd","#97815f","Talk about ability, opportunity, and changes in what you can do."],["library","Between the shelves","本のある場所","Longer thoughts, carefully connected.","n4-library","#e5ecdf","#708657","Describe exactly which person or thing you mean, and ask an embedded question."],["kitchen","Something on the stove","台所の時間","Try it. Prepare it. Make it yours.","n4-cooking","#f3e6db","#b48060","Try new actions, prepare ahead, and describe how a task feels."],["helping","A little help, shared","助け合い","Notice who does what for whom.","n4-community","#e1eeeb","#618c7b","Describe help from each person’s viewpoint and make considerate requests."],["plans","A weekend taking shape","これからの予定","An idea becomes a plan.","n4-plans","#ebe7f3","#8a78a4","Distinguish wishes, intentions, schedules, and decisions."],["journey","The route you choose","旅の途中","Different conditions. Different meanings.","n4-travel","#e4edf4","#648ca8","Understand conditions in directions, plans, advice, and unexpected situations."],["workday","Things in their place","仕事のひとこま","Actions, results, and small routines.","n4-work","#e9eddf","#7d8e59","Tell an action from its result and explain how to keep things ready."],["messages","News through the window","伝わること","What you see. What you hear.","n4-stories","#e7ebf4","#7484a5","Separate appearance, reported information, possibility, and expectation."],["health","A gentler daily rhythm","体を大切に","A little care, with clear words.","n4-clinic","#edf0e3","#8c9c69","Express purpose, deadlines, advice, and actions done without something else."],["festival","The town comes together","まちのお祭り","See an event from another side.","n4-festival","#f4e4df","#b57668","Follow event announcements and carefully track passive and causative roles."],["visiting","A thoughtful visit","ていねいな訪問","Care in the words you choose.","n4-visit","#eee7dc","#9e8566","Choose considerate language by noticing who acts and who is being respected."]].map(([o,i,a,s,l,h,c,r],d)=>({id:`n4-${o}`,level:"N4",index:d,title:i,jp:a,subtitle:s,art:l,color:h,accent:c,goal:r,grammars:[],kanji:""})),v=[`引っ越し|ひっこし|moving house|noun
アパート|アパート|apartment|place
住所|じゅうしょ|address|noun
借りる|かりる|borrow; rent|verb
貸す|かす|lend; rent out|verb
家賃|やちん|rent payment|noun
必要|ひつよう|necessary|naadj
不便|ふべん|inconvenient|naadj
安全|あんぜん|safe|naadj
説明|せつめい|explanation|noun
理由|りゆう|reason|noun
困る|こまる|be in difficulty|verb
故障|こしょう|breakdown; malfunction|noun
連絡|れんらく|contact; communication|noun
管理人|かんりにん|building manager|person
相談|そうだん|consultation|noun
案内|あんない|guidance; information|noun
約束|やくそく|promise; appointment|noun
運ぶ|はこぶ|carry; transport|verb
片付ける|かたづける|tidy up|verb
玄関|げんかん|entrance hall|place
壁|かべ|wall|noun
番号|ばんごう|number|noun
生活|せいかつ|daily life|noun`,`弾く|ひく|play a stringed instrument or piano|verb
ピアノ|ピアノ|piano|object
練習|れんしゅう|practice|noun
泳ぐ|およぐ|swim|verb
泳げる|およげる|can swim|verb
水泳|すいえい|swimming|noun
見える|みえる|be visible|verb
景色|けしき|scenery|noun
遠く|とおく|the distance|noun
聞こえる|きこえる|be audible|verb
声|こえ|voice|noun
音|おと|sound|noun
最近|さいきん|recently|time
上手|じょうず|skillful|naadj
下手|へた|unskillful|naadj
続ける|つづける|continue|verb
やめる|やめる|stop; quit|verb
趣味|しゅみ|hobby|noun
参加|さんか|participation|noun
申し込む|もうしこむ|apply; sign up|verb
道具|どうぐ|tools; equipment|object
無料|むりょう|free of charge|noun
無理|むり|impossible; unreasonable|naadj
機会|きかい|opportunity|noun`,`小説|しょうせつ|novel|object
雑誌|ざっし|magazine|object
作者|さくしゃ|author|person
探す|さがす|look for|verb
返す|かえす|return something|verb
受付|うけつけ|reception desk|place
文章|ぶんしょう|sentence; passage|noun
意味|いみ|meaning|noun
内容|ないよう|contents|noun
調べる|しらべる|look up; investigate|verb
選ぶ|えらぶ|choose|verb
読み方|よみかた|way of reading; pronunciation|noun
質問|しつもん|question|noun
答え|こたえ|answer|noun
正しい|ただしい|correct|iadj
知識|ちしき|knowledge|noun
興味|きょうみ|interest|noun
経験|けいけん|experience|noun
利用|りよう|use of a service|noun
規則|きそく|rule|noun
席|せき|seat|noun
予約|よやく|reservation|noun
方法|ほうほう|method|noun
意見|いけん|opinion|noun`,`料理|りょうり|cooking; dish|noun
味|あじ|taste|noun
試す|ためす|try out; test|verb
準備|じゅんび|preparation|noun
材料|ざいりょう|ingredients; materials|noun
切る|きる|cut|verb
焼く|やく|bake; grill|verb
焦げる|こげる|burn; become scorched|verb
全部|ぜんぶ|all of it|noun
混ぜる|まぜる|mix|verb
沸かす|わかす|boil water|verb
沸く|わく|water comes to a boil|verb
包丁|ほうちょう|kitchen knife|object
使う|つかう|use|verb
柔らかい|やわらかい|soft|iadj
硬い|かたい|hard; firm|iadj
苦い|にがい|bitter|iadj
濃い|こい|strong; concentrated|iadj
薄い|うすい|thin; weak in flavor|iadj
量|りょう|amount|noun
残る|のこる|remain|verb
冷蔵庫|れいぞうこ|refrigerator|object
皿|さら|plate|object
鍋|なべ|cooking pot|object`,`手伝う|てつだう|help with a task|verb
届ける|とどける|deliver|verb
贈り物|おくりもの|gift|object
迎える|むかえる|welcome; pick someone up|verb
送る|おくる|send; see someone off|verb
同僚|どうりょう|colleague|person
直す|なおす|fix; correct|verb
自分|じぶん|oneself|person
親切|しんせつ|kind|naadj
教える|おしえる|teach; tell|verb
資料|しりょう|reference materials|object
頼む|たのむ|ask for a favor|verb
見せる|みせる|show|verb
地元|じもと|local area|place
助かる|たすかる|be helped; be saved trouble|verb
感謝|かんしゃ|gratitude|noun
お礼|おれい|thanks; a token of thanks|noun
遠慮|えんりょ|restraint; holding back|noun
お互い|おたがい|each other|person
都合|つごう|availability; circumstances|noun
急ぐ|いそぐ|hurry|verb
遅れる|おくれる|be late|verb
待ち合わせ|まちあわせ|meeting up|noun
助ける|たすける|help; rescue|verb`,`集まる|あつまる|gather|verb
計画|けいかく|plan|noun
予定|よてい|schedule; plan|noun
出発|しゅっぱつ|departure|noun
用意|ようい|preparation; getting ready|noun
決める|きめる|decide|verb
留学|りゅうがく|study abroad|noun
将来|しょうらい|the future|time
目的|もくてき|purpose|noun
中止|ちゅうし|cancellation|noun
変更|へんこう|change; alteration|noun
日程|にってい|itinerary; schedule of dates|noun
会議|かいぎ|meeting; conference|noun
場所|ばしょ|place; venue|place
決まる|きまる|be decided|verb
知らせる|しらせる|inform|verb
今度|こんど|next time; this time|time
再来週|さらいしゅう|the week after next|time
予定表|よていひょう|schedule chart|object
集合|しゅうごう|assembly; gathering|noun
楽しみ|たのしみ|something to look forward to|noun
招待|しょうたい|invitation|noun
選択|せんたく|choice|noun
考える|かんがえる|think about; consider|verb`,`交差点|こうさてん|intersection|place
曲がる|まがる|turn|verb
信号|しんごう|traffic light|object
乗り換える|のりかえる|transfer vehicles|verb
間に合う|まにあう|be in time|verb
急行|きゅうこう|express train|transport
着く|つく|arrive|verb
迷う|まよう|lose one’s way; be undecided|verb
橋|はし|bridge|place
道順|みちじゅん|route; directions|noun
調子|ちょうし|condition; state of operation|noun
動く|うごく|move; operate|verb
温泉|おんせん|hot spring|place
観光|かんこう|sightseeing|noun
おすすめ|おすすめ|recommendation|noun
込む|こむ|be crowded|verb
交通|こうつう|traffic; transportation|noun
運休|うんきゅう|suspension of transport service|noun
距離|きょり|distance|noun
歩道|ほどう|sidewalk|place
反対|はんたい|opposite; opposition|noun
往復|おうふく|round trip|noun
片道|かたみち|one way|noun
途中|とちゅう|on the way; in the middle|noun`,`開ける|あける|open something|verb
開く|あく|something opens|verb
閉める|しめる|close something|verb
閉まる|しまる|something closes|verb
付ける|つける|turn on; attach|verb
付く|つく|be on; become attached|verb
消す|けす|turn off; erase|verb
消える|きえる|go out; disappear|verb
落とす|おとす|drop something|verb
落ちる|おちる|fall|verb
壊す|こわす|break something|verb
壊れる|こわれる|something breaks|verb
掛ける|かける|hang something|verb
掛かる|かかる|be hanging; take time|verb
そのまま|そのまま|as it is|adverb
忘れ物|わすれもの|an item left behind|noun
確認|かくにん|confirmation; checking|noun
注意|ちゅうい|attention; caution|noun
整理|せいり|organization; putting in order|noun
習慣|しゅうかん|habit|noun
職場|しょくば|workplace|place
連絡先|れんらくさき|contact details|noun
書類|しょるい|documents|object
責任|せきにん|responsibility|noun`,`降る|ふる|rain or snow falls|verb
予報|よほう|forecast|noun
様子|ようす|appearance; situation|noun
知らせ|しらせ|news; notice|noun
ニュース|ニュース|news|noun
伝える|つたえる|convey; tell|verb
留守|るす|absence from home|noun
留守番|るすばん|looking after a home in someone’s absence|noun
もしかしたら|もしかしたら|perhaps; possibly|adverb
確か|たしか|if I remember correctly; certain|naadj
きっと|きっと|surely; almost certainly|adverb
多分|たぶん|probably|adverb
はっきり|はっきり|clearly|adverb
本当|ほんとう|truth; real|noun
うわさ|うわさ|rumor|noun
心配|しんぱい|worry|noun
安心|あんしん|relief; peace of mind|noun
残念|ざんねん|disappointing; unfortunate|naadj
返事|へんじ|reply|noun
届く|とどく|arrive; reach someone|verb
急に|きゅうに|suddenly|adverb
しばらく|しばらく|for a while|adverb
必ず|かならず|without fail|adverb
例えば|たとえば|for example|adverb`,`健康|けんこう|health|noun
運動|うんどう|physical exercise|noun
散歩する|さんぽする|take a walk|verb
薬|くすり|medicine|noun
忘れずに|わすれずに|without forgetting|adverb
治る|なおる|recover; heal|verb
食事|しょくじ|meal; eating|noun
栄養|えいよう|nutrition|noun
睡眠|すいみん|sleep|noun
休憩|きゅうけい|rest break|noun
無理する|むりする|overdo it|verb
痛い|いたい|painful|iadj
熱|ねつ|fever; heat|noun
咳|せき|cough|noun
風邪|かぜ|a cold|noun
診察|しんさつ|medical examination|noun
医者|いしゃ|doctor|person
看護師|かんごし|nurse|person
保険|ほけん|insurance|noun
受付時間|うけつけじかん|reception hours|noun
早寝|はやね|going to bed early|noun
毎晩の習慣|まいばんのしゅうかん|nightly habit|noun
調整|ちょうせい|adjustment|noun
回復|かいふく|recovery|noun`,`祭り|まつり|festival|noun
開く|ひらく|hold an event; open|verb
会場|かいじょう|event venue|place
招く|まねく|invite|verb
紹介|しょうかい|introduction|noun
客|きゃく|guest; customer|person
盗む|ぬすむ|steal|verb
財布|さいふ|wallet|object
持ち主|もちぬし|owner|person
準備する|じゅんびする|prepare|verb
子どもたち|こどもたち|children|person
係|かかり|person in charge|person
並ぶ|ならぶ|line up|verb
並べる|ならべる|arrange things in a row|verb
集める|あつめる|collect things|verb
参加者|さんかしゃ|participant|person
文化|ぶんか|culture|noun
歴史|れきし|history|noun
踊る|おどる|dance|verb
踊り|おどり|dance|noun
行事|ぎょうじ|event; ceremony|noun
案内所|あんないじょ|information center|place
特別|とくべつ|special|naadj
思い出|おもいで|memory|noun`,`訪問|ほうもん|visit|noun
お客様|おきゃくさま|guest; customer (respectful)|person
いらっしゃる|いらっしゃる|be; come; go (respectful)|verb
召し上がる|めしあがる|eat; drink (respectful)|verb
ご覧になる|ごらんになる|see; look at (respectful)|verb
おっしゃる|おっしゃる|say (respectful)|verb
伺う|うかがう|visit; ask (humble)|verb
申す|もうす|say; be called (humble)|verb
いただく|いただく|receive; eat; drink (humble)|verb
拝見する|はいけんする|look at (humble)|verb
お待ちする|おまちする|wait (humble)|verb
お持ちする|おもちする|bring; carry (humble)|verb
お越しになる|おこしになる|come (respectful)|verb
ご都合|ごつごう|availability (polite)|noun
よろしい|よろしい|good; acceptable (polite)|iadj
失礼|しつれい|discourtesy; an excuse|noun
丁寧|ていねい|polite; careful|naadj
敬語|けいご|honorific language|noun
先輩|せんぱい|senior colleague or student|person
後輩|こうはい|junior colleague or student|person
社長|しゃちょう|company president|person
部長|ぶちょう|department manager|person
失礼します|しつれいします|excuse me when entering or leaving|phrase
お世話になります|おせわになります|thank you for your help and support|phrase`],b=v.flatMap((o,i)=>o.split(`
`).map((a,s)=>{const[l,h,c,r]=a.split("|");return{id:`${u[i].id}-${s}`,level:"N4",area:u[i].id,jp:l,reading:h,meaning:c,kind:r,definitions:c.split(";").map(d=>d.trim()),lesson:Math.floor(s/2),usage:r==="verb"?"Learn the whole verb in its context. The lesson shows the form needed for this situation.":void 0}})),e=(o,i,a,s,l=[],h=[])=>({text:o,reading:i,english:a,units:s,requires:l,variants:h}),n=(o,i,a,s,l,h,c,r,d=[],g=[])=>{const p=u[o],f=p.grammars.length;return p.grammars.push(`n4-${i}`),{id:`grammar-n4-${i}`,key:`n4-${i}`,level:"N4",area:p.id,lesson:f,pattern:a,title:s,explanation:l,note:h,keyword:c,example:r[0].text,translation:r[0].english,samples:r,drills:d,steps:g}},t=(o,i,a="Make the form shown in this lesson.")=>({base:o,answer:i,prompt:a}),k=[n(0,"plain-negative","Verb ない / なかった","Plain negatives, built carefully","Plain forms appear inside longer polite sentences, not only in casual conversation. For an ichidan verb, replace る with ない: 借りる → 借りない. For a godan verb, change its final u-row sound to the a row and add ない: 書く → 書かない. A final う becomes わない: 買う → 買わない. する becomes しない; 来る becomes こない. To make the past negative, replace ない with なかった.","ある is irregular: its negative is ない, not あらない. A verb ending in る is not automatically ichidan; learn its group.","しない",[e("あした、ひっこしをしない。","あした、ひっこしをしない。","I will not move tomorrow.",[["あした","tomorrow"],["ひっこしをしない","will not move house"]],["引っ越し"],["I am not moving tomorrow."]),e("アパートをかりなかった。","アパートをかりなかった。","I did not rent an apartment.",[["アパートを","an apartment"],["かりなかった","did not rent"]],["アパート","借りる"])],[t("借りる → plain negative","かりない"),t("書く → plain negative","かかない"),t("買う → plain negative","かわない"),t("する → plain past negative","しなかった")],["Find the verb group before choosing an ending.","Build the plain negative: 借りる → 借りない.","Change only ない for the past negative: 借りない → 借りなかった.","Use the complete plain form inside a longer sentence; its final ending can still be polite."]),n(0,"plain-states","N / な-adjective だ · い-adjective","Plain states are not verb endings","Nouns and な-adjectives use だ in a plain affirmative: 学生だ, 静かだ. Their plain negative is じゃない and their past negative is じゃなかった. An い-adjective keeps its final い in the affirmative, changes it to くない in the negative, and to くなかった in the past negative. These forms must be ready before longer clauses are easy.","いい uses the stem よ: よくない and よくなかった. Do not add だ after a plain い-adjective.","じゃない",[e("ここはしずかじゃない。","ここはしずかじゃない。","It is not quiet here.",[["ここは","here, as the topic"],["しずかじゃない","is not quiet"]]),e("このアパートはたかくなかった。","このアパートはたかくなかった。","This apartment was not expensive.",[["このアパートは","this apartment"],["たかくなかった","was not expensive"]],["アパート"])],[t("静か → plain negative","しずかじゃない"),t("高い → plain past negative","たかくなかった"),t("学生 → plain affirmative","がくせいだ")]),n(0,"explanatory","Plain form + んです","An explanation that fits the situation","Imagine someone sees boxes at your door and asks what is happening. あした、ひっこしをするんです connects your answer to that situation: “I am moving tomorrow.” Put んです after a plain verb or い-adjective. After a noun or な-adjective, use なんです: 必要なんです. のです is the fuller form.","んです does not automatically mean “because,” and it is not needed in every statement. Use it to supply or ask for relevant background.","んです",[e("あした、ひっこしをするんです。","あした、ひっこしをするんです。","I am moving tomorrow.",[["あした","tomorrow"],["ひっこしをするんです","am moving; explaining the boxes"]],["引っ越し"],["I will move tomorrow."]),e("このかぎがひつようなんです。","このかぎがひつようなんです。","I need this key.",[["このかぎが","this key"],["ひつようなんです","is needed; explaining the situation"]],["必要"])],[t("必要だ → explanatory polite","ひつようなんです"),t("忙しい → explanatory polite","いそがしいんです")],["Notice the situation that makes an explanation relevant.","Build a plain statement: あした、引っ越しをする.","Attach んです; for nouns and な-adjectives, replace だ with な first.","Keep a neutral です sentence available when no explanatory connection is needed."]),n(0,"help-opening","〜んですが、…","Opening the door to a request","んですが gives the background for a request or a difficulty. In じゅうしょがわからないんですが, the listener understands that you probably need help with the address. The final が leaves room for a response. A clear request can follow; it is not necessary to leave the whole need unstated.","This is not simply an English “but.” The practical job is to explain your situation and invite help.","んですが",[e("じゅうしょがわからないんですが。","じゅうしょがわからないんですが。","I do not know the address. Could you help?",[["じゅうしょが","the address"],["わからないんですが","I do not know it; opening a request"]],["住所"],["I do not know the address.","I am not sure of the address."]),e("こまっているんですが。","こまっているんですが。","I am having trouble. Could you help?",[["こまっているんですが","I am in difficulty; inviting assistance"]],["困る"],["I am having trouble."])],[t("分からない → a polite help-opening ending","わからないんですが")]),n(0,"soft-kedo","Plain form + けど","A softer connection","けど can connect a contrast, like “but,” or soften an opening before a request. Use a plain clause before it: 行きたいけど、時間がありません. Nouns and な-adjectives keep だ: 不便だけど. You can also hear polite ですけど; the choice depends on the conversation.","A sentence ending in けど may leave the next step for the listener. Do not invent a strong contrast when the context is simply a gentle opening.","けど",[e("いきたいけど、じかんがありません。","いきたいけど、じかんがありません。","I want to go, but I do not have time.",[["いきたいけど","I want to go, but"],["じかんがありません","I do not have time"]]),e("ふべんだけど、やすいです。","ふべんだけど、やすいです。","It is inconvenient, but inexpensive.",[["ふべんだけど","inconvenient, but"],["やすいです","inexpensive"]],["不便"])],[t("不便だ → connect with けど","ふべんだけど")]),n(0,"report-plain","Plain clause + と言っていました","Report the message, keep its meaning","You already know と for quoted words. In an indirect report, put the message in a plain form before と言っていました: “They said the rent was expensive.” Nouns and な-adjectives need だ in a non-past affirmative. The outer reporting verb can be polite even when the inner message is plain.","A direct quotation keeps the original speaker’s words. An indirect report can adjust perspective, so always track who said what.","といっていました",[e("ともだちは、やちんがたかいといっていました。","ともだちは、やちんがたかいといっていました。","My friend said the rent was expensive.",[["ともだちは","my friend, the speaker being reported"],["やちんがたかい","the rent is expensive"],["といっていました","said that"]],["家賃"],["My friend said the rent is expensive."]),e("あしたくるといっていました。","あしたくるといっていました。","They said they would come tomorrow.",[["あしたくる","come tomorrow"],["といっていました","they said"]],[],["They said they will come tomorrow."])],[t("必要です → the plain clause before と","ひつようだ")]),n(1,"potential","Godan e-row + る / ichidan られる","Build a potential form","Potential forms describe what someone can do. For a godan verb, change the final u-row sound to the e row and add る: 泳ぐ → 泳げる. For an ichidan verb, replace る with られる: 食べる → 食べられる. する becomes できる; 来る becomes こられる. The potential form then conjugates like an ichidan verb.","You will hear shortened 食べれる in conversation. Begin with the standard 食べられる. Potential forms can use が or を with the thing involved; を is not universally wrong.","ひけます",[e("ピアノがひけます。","ピアノがひけます。","I can play the piano.",[["ピアノが","the piano, the thing I can play"],["ひけます","can play"]],["ピアノ","弾く"]),e("にほんごのほんがよめます。","にほんごのほんがよめます。","I can read books in Japanese.",[["にほんごのほんが","books in Japanese"],["よめます","can read"]])],[t("弾く → polite potential","ひけます"),t("食べる → polite potential","たべられます"),t("する → polite potential","できます"),t("来る → polite potential","こられます")],["Find the verb group.","For 泳ぐ, move ぐ to げ and add る: 泳げる.","Make it polite: 泳げる → 泳げます.","Make it negative when needed: 泳げない / 泳げません."]),n(1,"opportunity","Potential + situation","Ability is not the whole story","A potential form can express an available opportunity or a practical possibility. ここでおよげます might mean you have the skill, but in context it often means this is a place where swimming is possible. Weather, time, facilities, and rules can make the situation clear.","Permission and possibility overlap in some situations, but they are not identical. Ask てもいいですか when your main concern is whether you are allowed.","およげます",[e("ここでおよげます。","ここでおよげます。","You can swim here.",[["ここで","at this place"],["およげます","swimming is possible"]],["泳ぐ"],["It is possible to swim here."]),e("きょうはじかんがあるので、れんしゅうできます。","きょうはじかんがあるので、れんしゅうできます。","I have time today, so I can practice.",[["きょうはじかんがあるので","because I have time today"],["れんしゅうできます","I can practice"]],["練習"])],[t("泳げる → polite potential negative","およげません")]),n(1,"visible","N が見える","Something comes into view","見える describes something being visible, without choosing an action to make it happen. ここから山が見えます means the mountain is visible from here. 見られる, the potential of 見る, can instead describe being able to watch something or having an opportunity to see it.","Do not treat 見える and 見られる as interchangeable conjugations. One describes visibility; the other is a potential form whose meaning depends on context.","みえます",[e("ここからやまがみえます。","ここからやまがみえます。","The mountain is visible from here.",[["ここから","from here"],["やまがみえます","the mountain is visible"]],["見える"],["You can see the mountain from here.","I can see the mountain from here."]),e("まどからけしきがみえます。","まどからけしきがみえます。","You can see the scenery from the window.",[["まどから","from the window"],["けしきがみえます","the scenery is visible"]],["景色","見える"])],[t("見える → polite negative","みえません")]),n(1,"audible","N が聞こえる","A sound reaches you","聞こえる means a sound is audible or reaches your ears. こえがきこえます describes hearing a voice, without saying that you chose to listen. 聞ける is the potential form of 聞く and can describe an opportunity to listen or ask.","Mark the audible sound with が in the basic pattern. A faint sound can be audible even when you cannot understand the words.","きこえます",[e("こえがきこえます。","こえがきこえます。","I can hear a voice.",[["こえが","a voice"],["きこえます","is audible"]],["声","聞こえる"],["A voice is audible."]),e("ここではおんがくがきこえません。","ここではおんがくがきこえません。","You cannot hear the music here.",[["ここでは","here, as the contrasting place"],["おんがくがきこえません","the music is not audible"]],["聞こえる"],["I cannot hear the music here."])],[t("聞こえる → polite past","きこえました")]),n(1,"learned-change","Potential + ようになる","A new ability develops","Use a potential form before ようになる to describe a change in ability: 泳げるようになりました, “I became able to swim.” The change matters, not just the ability itself. A non-potential dictionary verb can also describe the development of a habit.","For an ability, include the potential form before ようになる. 泳ぐようになる usually means beginning to swim as a habit, not learning the skill.","ようになりました",[e("およげるようになりました。","およげるようになりました。","I became able to swim.",[["およげる","be able to swim"],["ようになりました","came to be able to do so"]],["泳げる"],["I can swim now.","I learned to swim.","I am now able to swim."]),e("ピアノがひけるようになりました。","ピアノがひけるようになりました。","I became able to play the piano.",[["ピアノがひける","be able to play the piano"],["ようになりました","a new ability developed"]],["ピアノ","弾く"])],[t("泳げる → describe a new ability, politely in the past","およげるようになりました")]),n(1,"cease","Verb なくなる","Something stops happening","Start with a verb’s plain negative and replace ない with なくなる: 行かない → 行かなくなる. This describes a change to not doing something. A potential negative can describe losing an ability: 泳げなくなった. Keep that different from deliberately deciding to stop.","For an intentional decision, use a decision pattern later. なくなる itself describes the resulting change.","なくなりました",[e("さいきん、あまりおよがなくなりました。","さいきん、あまりおよがなくなりました。","Recently I have stopped swimming much.",[["さいきん","recently"],["あまりおよがなくなりました","I no longer swim much"]],["最近","泳ぐ"],["I do not swim much anymore."]),e("れんしゅうにいかなくなりました。","れんしゅうにいかなくなりました。","I stopped going to practice.",[["れんしゅうに","to practice"],["いかなくなりました","stopped going"]],["練習"])],[t("行かない → polite past change","いかなくなりました")]),n(2,"relative-object","Plain clause + N","Say which book you mean","Put a short plain clause directly before the noun it describes. Start with “I bought it yesterday” and “the book.” きのうかったほん combines them as “the book I bought yesterday.” The noun at the end is the thing you are identifying; Japanese does not add a word for “that” or “which.”","Do not insert の between an ordinary verb clause and its noun. きのうかったのほん is not this pattern.","かった",[e("これは、きのうかったしょうせつです。","これは、きのうかったしょうせつです。","This is the novel I bought yesterday.",[["これは","this, as the topic"],["きのうかったしょうせつ","the novel I bought yesterday"],["です","polite identification"]],["小説"],["This is the novel that I bought yesterday."]),e("ともだちがかいたほんをよみました。","ともだちがかいたほんをよみました。","I read a book my friend wrote.",[["ともだちがかいたほんを","a book my friend wrote"],["よみました","I read it"]],[],["I read a book that my friend wrote."])],[t("買います → form before 本 for a completed purchase","かった")],["Make the describing thought: きのう買った.","Place the noun directly after it: きのう買った小説.","Use that whole noun phrase in a sentence.","Find the final noun first when a description looks long."]),n(2,"relative-person","Subject-gap clause + person","Describe the person doing it","A clause can identify a person by what they do. ほんをよんでいるひと is “the person who is reading a book.” The person being described is not repeated inside the clause. The ordinary sentence ending comes after the entire noun phrase.","Read the whole description before deciding who the sentence is about. The noun after the clause fills its missing role.","よんでいる",[e("ほんをよんでいるひとはともだちです。","ほんをよんでいるひとはともだちです。","The person reading a book is my friend.",[["ほんをよんでいるひとは","the person who is reading a book"],["ともだちです","is my friend"]],[],["The person who is reading a book is my friend."]),e("うけつけにいるひとにきいてください。","うけつけにいるひとにきいてください。","Please ask the person at reception.",[["うけつけにいるひとに","the person who is at reception"],["きいてください","please ask"]],["受付"])],[t("読んでいます → plain form before 人","よんでいる")]),n(2,"relative-states","い-adj / な-adj な / N の + N","Descriptions do not all use だ","A plain verb can describe a noun directly, but nouns and な-adjectives use their special noun-linking forms. 静かな場所 is a quiet room; 日本語の本 is a Japanese-language book. An い-adjective keeps い: 面白い文章. A past state can use だった: 静かだった場所.","Do not place ordinary affirmative だ directly before the noun: 静かだ場所 is not the basic pattern.","おもしろい",[e("おもしろいぶんしょうをさがしています。","おもしろいぶんしょうをさがしています。","I am looking for an interesting passage.",[["おもしろいぶんしょうを","an interesting passage"],["さがしています","am looking for"]],["文章","探す"]),e("しずかなへやでよみたいです。","しずかなへやでよみたいです。","I want to read in a quiet room.",[["しずかなへやで","in a quiet room"],["よみたいです","want to read"]],[])],[t("静か + 部屋","しずかなへや"),t("日本語 + 本","にほんごのほん")]),n(2,"nominalize","Plain clause + の / こと","Turn an action into something to discuss","の or こと can turn an action into a noun-like idea. 本を読むのが好きです means “I like reading books.” The action ends in a plain form before の. の often feels closely connected to an actual action or perception; こと often presents an action more abstractly.","They overlap in many patterns but are not interchangeable everywhere. Keep fixed expressions such as ことができます as whole patterns.","のがすきです",[e("ほんをよむのがすきです。","ほんをよむのがすきです。","I like reading books.",[["ほんをよむのが","reading books, as the liked activity"],["すきです","I like it"]],[],["I like to read books."]),e("しらべることはたのしいです。","しらべることはたのしいです。","Looking things up is enjoyable.",[["しらべることは","looking things up, as an activity"],["たのしいです","is enjoyable"]],["調べる"],["Looking things up is fun."])],[t("読みます → the activity before の","よむ")]),n(2,"embedded-question","Question clause + か","Put a question inside a sentence","A question can become part of a larger sentence: どのほんをえらぶかわかりません, “I do not know which book to choose.” Keep the question word in its normal Japanese position, use a plain verb before か, and then add the main sentence.","Do not keep the polite question ending ですか inside this basic embedded pattern. Nouns and な-adjectives normally omit だ before this か.","かわかりません",[e("どのほんをえらぶかわかりません。","どのほんをえらぶかわかりません。","I do not know which book to choose.",[["どのほんをえらぶか","which book to choose"],["わかりません","I do not know"]],["選ぶ"]),e("こたえがどこにあるかしらべます。","こたえがどこにあるかしらべます。","I will check where the answer is.",[["こたえがどこにあるか","where the answer is"],["しらべます","I will check"]],["答え","調べる"])],[t("どこにありますか → embedded question clause","どこにあるか")]),n(2,"whether","Plain clause + かどうか","Whether or not","When the inner question has a yes-or-no answer, かどうか means “whether or not.” よやくがひつようかどうかしらべます means “I will check whether a reservation is necessary.” This is an uncertain question being considered, not a statement that the thing is true.","For a noun or な-adjective, omit だ before かどうか in this basic form: 必要かどうか.","かどうか",[e("よやくがひつようかどうかしらべます。","よやくがひつようかどうかしらべます。","I will check whether a reservation is necessary.",[["よやくがひつようかどうか","whether a reservation is necessary"],["しらべます","I will check"]],["予約","調べる"],["I will check if a reservation is necessary."]),e("そのいけんがただしいかどうかわかりません。","そのいけんがただしいかどうかわかりません。","I do not know whether that opinion is correct.",[["そのいけんがただしいかどうか","whether that opinion is correct"],["わかりません","I do not know"]],["意見","正しい"],["I do not know if that opinion is correct."])],[t("必要だ → whether it is necessary","ひつようかどうか")]),n(3,"try","Verb てみる","Try an action and see","Attach みる to a て-form verb to try doing something and discover the result: 料理してみます, “I will try cooking.” This is not the ordinary verb 見る meaning “look at.” The part after the て form is normally written in kana.","A wish to try is てみたいです. Trying an action is different from simply testing an object with 試す.","てみます",[e("にほんのりょうりをつくってみます。","にほんのりょうりをつくってみます。","I will try making Japanese food.",[["にほんのりょうりを","Japanese food"],["つくってみます","will try making it"]],["料理"],["I will try cooking Japanese food."]),e("このあじをためしてみたいです。","このあじをためしてみたいです。","I want to try this flavor.",[["このあじを","this flavor"],["ためしてみたいです","want to try it"]],["味","試す"])],[t("作る → politely say you will try doing it","つくってみます")]),n(3,"prepare","Verb ておく","Do it now for later","ておく presents an action as preparation for a later need. やさいをきっておきます means “I will cut the vegetables in advance.” The later purpose may be stated or understood. In speech, ておく often contracts to とく, but learn the fuller form first.","An action can simply be finished without being preparation. Choose ておく when readiness for later is part of the meaning.","ておきます",[e("やさいをきっておきます。","やさいをきっておきます。","I will cut the vegetables in advance.",[["やさいを","the vegetables"],["きっておきます","will cut them to prepare for later"]],["切る"],["I will cut the vegetables ahead of time."]),e("ざいりょうをかっておきました。","ざいりょうをかっておきました。","I bought the ingredients in advance.",[["ざいりょうを","the ingredients"],["かっておきました","bought them ahead of time"]],["材料"])],[t("切る → polite preparation for later","きっておきます")]),n(3,"complete-regret","Verb てしまう","Completion, sometimes with regret","てしまう can emphasize that an action is completely done. Context and tone can also express regret or an unwelcome outcome: こがしてしまいました, “I burned it.” It does not always mean an accident, and it does not automatically add blame.","Conversational ちゃう and じゃう are contractions of てしまう and でしまう. Recognize them gradually; practice the full forms first.","てしまいました",[e("パンをぜんぶたべてしまいました。","パンをぜんぶたべてしまいました。","I ate all the bread.",[["パンをぜんぶ","all the bread"],["たべてしまいました","ate it completely"]],["全部"],["I have eaten all the bread."]),e("りょうりがこげてしまいました。","りょうりがこげてしまいました。","The food burned.",[["りょうりが","the food"],["こげてしまいました","burned, unfortunately"]],["料理","焦げる"],["The dish got burned.","The food has burned."])],[t("食べる → completed action, politely in the past","たべてしまいました")]),n(3,"while","Verb stem + ながら","Two actions, one person","Attach ながら to a verb’s ます stem to describe a background action happening while the same person performs the main action. おんがくをききながらりょうりします means “I cook while listening to music.” The main action comes last and carries the tense.","For different people doing different actions, a time clause such as 間 is usually more useful than this basic ながら pattern.","ながら",[e("おんがくをききながらりょうりします。","おんがくをききながらりょうりします。","I cook while listening to music.",[["おんがくをききながら","while listening to music"],["りょうりします","I cook"]],["料理"]),e("はなしながらざいりょうをまぜました。","はなしながらざいりょうをまぜました。","I mixed the ingredients while talking.",[["はなしながら","while talking"],["ざいりょうをまぜました","I mixed the ingredients"]],["材料","混ぜる"])],[t("聞きます → while listening","ききながら")]),n(3,"easy-to","Verb stem + やすい","Easy to do","Attach やすい to a verb’s ます stem: 使います → 使いやすい. This describes how easy an action is, often because of an object’s design or the situation. The whole expression conjugates like an い-adjective.","やすい here means easy to do, not inexpensive. The verb stem tells you which action is easy.","やすい",[e("このほうちょうはつかいやすいです。","このほうちょうはつかいやすいです。","This kitchen knife is easy to use.",[["このほうちょうは","this kitchen knife"],["つかいやすいです","is easy to use"]],["包丁","使う"]),e("このやさいはきりやすいです。","このやさいはきりやすいです。","This vegetable is easy to cut.",[["このやさいは","this vegetable"],["きりやすいです","is easy to cut"]],["切る"])],[t("使います → easy to use","つかいやすい")]),n(3,"hard-to","Verb stem + にくい","Difficult to do","Attach にくい to a verb’s ます stem to describe difficulty with an action: 切ります → 切りにくい. The sentence can concern an object’s properties or a practical difficulty. It conjugates like an い-adjective: 切りにくかったです.","This is not the noun 肉, meat. It is an adjective-forming ending attached to an action.","にくい",[e("このにくはかたくて、きりにくいです。","このにくはかたくて、きりにくいです。","This meat is hard and difficult to cut.",[["このにくはかたくて","this meat is hard, so"],["きりにくいです","it is difficult to cut"]],["硬い","切る"],["This meat is tough and difficult to cut."]),e("このなべはつかいにくいです。","このなべはつかいにくいです。","This cooking pot is difficult to use.",[["このなべは","this cooking pot"],["つかいにくいです","is difficult to use"]],["鍋","使う"])],[t("切ります → difficult to cut","きりにくい")]),n(4,"help-give","Verb てあげる","A helpful action goes outward","てあげる describes doing an action for someone else’s benefit. ゆきがはるをてつだってあげました means Yuki helped Haru. The action’s own particles remain: 手伝う takes the helped person with を. The giving expression adds a viewpoint, not a new actor.","Saying てあげます directly to the recipient can sound as though you are emphasizing your generosity. A simple offer with ましょうか is often more considerate.","てあげました",[e("ゆきがはるをてつだってあげました。","ゆきがはるをてつだってあげました。","Yuki helped Haru.",[["ゆきが","Yuki, who acts"],["はるを","Haru, who receives the help"],["てつだってあげました","helped, from the giver’s viewpoint"]],["手伝う"]),e("ともだちにおくりものをとどけてあげました。","ともだちにおくりものをとどけてあげました。","I delivered a gift to my friend.",[["ともだちに","to my friend"],["おくりものを","a gift"],["とどけてあげました","delivered as a favor"]],["届ける","贈り物"])],[t("手伝う → a helpful action given, polite past","てつだってあげました")],["Find the action first: Yuki helps Haru.","Keep its roles: ゆきが / はるを / 手伝う.","Put the action into て form and attach あげる.","The subject still does the action; the benefit goes outward."]),n(4,"help-kureru","Verb てくれる","Someone does something for your side","てくれる describes someone doing an action that benefits the speaker or the speaker’s side. はるがむかえてくれました means Haru picked me up, with appreciation built into the viewpoint. Haru is still the person doing the welcoming or pickup.","くれる points toward the speaker’s side. The sentence need not name わたし when the beneficiary is clear.","てくれました",[e("はるがむかえてくれました。","はるがむかえてくれました。","Haru picked me up.",[["はるが","Haru, the person acting"],["むかえてくれました","picked me up, to my benefit"]],["迎える"]),e("どうりょうがえきまでおくってくれました。","どうりょうがえきまでおくってくれました。","My colleague took me to the station.",[["どうりょうが","my colleague, the person acting"],["えきまで","to the station"],["おくってくれました","took me there as a favor"]],["同僚","送る"],["My colleague gave me a ride to the station."])],[t("迎える → helpful action toward me, polite past","むかえてくれました")]),n(4,"help-receive","Person に Verb てもらう","Receive help, keep track of the helper","てもらう describes receiving the benefit of another person’s action. In ゆきははるになおしてもらいました, Yuki receives help and Haru does the fixing. The helper is marked with に; the subject is the beneficiary. This is a change of viewpoint from てくれる.","Do not translate the subject as the person doing the fixing. Use named people until the direction is comfortable.","てもらいました",[e("ゆきははるになおしてもらいました。","ゆきははるになおしてもらいました。","Haru fixed it for Yuki.",[["ゆきは","Yuki, the beneficiary"],["はるに","Haru, the helper"],["なおしてもらいました","received the favor of having it fixed"]],["直す"],["Yuki had Haru fix it.","Yuki got Haru to fix it."]),e("ともだちににほんごをおしえてもらいました。","ともだちににほんごをおしえてもらいました。","My friend taught me Japanese.",[["ともだちに","my friend, who taught"],["にほんごを","Japanese"],["おしえてもらいました","I received help learning"]],["教える"])],[t("直す → receiving the helpful action, polite past","なおしてもらいました")],["Say the ordinary event: Haru fixed it.","Choose Yuki as the person whose benefit you describe.","Mark the helper Haru with に.","Use 直してもらいました: Yuki received Haru’s help."]),n(4,"receive-request","Verb てもらえませんか","Ask if you could receive help","てもらえませんか uses a negative potential question to make a request: おしえてもらえませんか, “Could you tell me?” You ask whether you could receive the helpful action, giving the listener room to decline. It is a request, not a statement that someone lacks ability.","The person you ask will perform the action. This pattern does not turn you into the teacher or helper.","てもらえませんか",[e("おしえてもらえませんか。","おしえてもらえませんか。","Could you tell me?",[["おしえてもらえませんか","could I receive the favor of you telling me"]],["教える"],["Could you teach me?","Could you explain it to me?"]),e("しりょうをみせてもらえませんか。","しりょうをみせてもらえませんか。","Could you show me the materials?",[["しりょうを","the materials"],["みせてもらえませんか","could you show them to me"]],["資料","見せる"])],[t("教える → request with てもらえませんか","おしえてもらえませんか")]),n(4,"give-request","Verb てくれませんか","Ask someone to act for you","てくれませんか asks the listener to do a helpful action for your side. みせてくれませんか means “Could you show me?” It is normally more direct than てもらえませんか; relationship, tone, and the size of the request all matter.","くれる is the giving direction toward you. Keep the helper as the action’s actor when translating.","てくれませんか",[e("ちずをみせてくれませんか。","ちずをみせてくれませんか。","Could you show me the map?",[["ちずを","the map"],["みせてくれませんか","could you show it to me"]],["見せる"]),e("すこしてつだってくれませんか。","すこしてつだってくれませんか。","Could you help me a little?",[["すこし","a little"],["てつだってくれませんか","could you help me"]],["手伝う"])],[t("見せる → request with てくれませんか","みせてくれませんか")]),n(4,"thanks-help","Verb てくれてありがとう","Name the help you appreciate","Put the helpful action in て form before くれてありがとう: 手伝ってくれてありがとう, “Thank you for helping me.” The listener did the action, and the speaker benefits. A polite ending, ありがとうございます, fits many everyday situations.","The thanks are directed to the helper. Do not reverse the event into “Thank you for letting me help you.”","てくれてありがとう",[e("てつだってくれてありがとう。","てつだってくれてありがとう。","Thank you for helping me.",[["てつだってくれてありがとう","thank you for the help you gave me"]],["手伝う"],["Thanks for helping me."]),e("むかえにきてくれてありがとうございます。","むかえにきてくれてありがとうございます。","Thank you for coming to pick me up.",[["むかえにきてくれて","you came to pick me up"],["ありがとうございます","thank you"]],["迎える"])],[t("手伝う → thank the helper, with ありがとう","てつだってくれてありがとう")]),n(5,"volitional","Godan o-row + う / ichidan よう","Give an intention its shape","The plain volitional is a building block for intentions and suggestions. For a godan verb, move the final sound to the o row and add う: 集まる → 集まろう. For an ichidan verb, replace る with よう: 食べる → 食べよう. する becomes しよう and 来る becomes こよう.","A volitional is not an ordinary future tense. あした行く can state a future plan without using 行こう.","あつまろう",[e("あした、ここにあつまろう。","あした、ここにあつまろう。","Let’s gather here tomorrow.",[["あした","tomorrow"],["ここにあつまろう","let us gather here"]],["集まる"]),e("いっしょにけいかくをかんがえよう。","いっしょにけいかくをかんがえよう。","Let’s think about the plan together.",[["いっしょに","together"],["けいかくをかんがえよう","let us think about the plan"]],["計画","考える"])],[t("集まる → plain volitional","あつまろう"),t("食べる → plain volitional","たべよう"),t("する → plain volitional","しよう"),t("来る → plain volitional","こよう")]),n(5,"intention","Volitional + と思っています","An intention you have been holding","A volitional followed by と思っています describes an intention you have in mind: しゅっぱつしようとおもっています. と思います can express a decision or intention forming now. The volitional inside the thought and the polite final verb have separate jobs.","Do not translate every と思う as uncertainty. With a volitional it concerns what the person intends to do.","ようとおもっています",[e("あしたしゅっぱつしようとおもっています。","あしたしゅっぱつしようとおもっています。","I intend to leave tomorrow.",[["あしたしゅっぱつしよう","leave tomorrow, as my intention"],["とおもっています","I have that in mind"]],["出発"],["I am thinking of leaving tomorrow.","I am planning to leave tomorrow."]),e("はやくよういしようとおもいます。","はやくよういしようとおもいます。","I think I will get ready early.",[["はやくよういしよう","get ready early"],["とおもいます","I am forming that intention"]],["用意"])],[t("出発する → plain volitional","しゅっぱつしよう")]),n(5,"tsumori","Dictionary / ない form + つもり","An intention you mean to follow","つもり presents a personal intention. A dictionary verb makes a positive intention: りゅうがくするつもりです. A negative verb gives an intention not to act: いかないつもりです. The final です keeps the statement polite.","An intention is not a guaranteed result. つもり is especially natural for actions within the person’s control, rather than predicting the weather.","つもりです",[e("らいねん、りゅうがくするつもりです。","らいねん、りゅうがくするつもりです。","I intend to study abroad next year.",[["らいねん","next year"],["りゅうがくするつもりです","intend to study abroad"]],["留学"],["I plan to study abroad next year."]),e("きょうはいかないつもりです。","きょうはいかないつもりです。","I intend not to go today.",[["きょうは","today"],["いかないつもりです","intend not to go"]],[],["I do not plan to go today."])],[t("行きません → negative intention with つもりです","いかないつもりです")]),n(5,"schedule","Dictionary form / N の + 予定","A plan on the schedule","予定 describes a scheduled plan or arrangement. A dictionary verb goes directly before it: かいぎをするよていです. A noun uses の: らいしゅうのよてい. Compared with a private intention expressed by つもり, 予定 often points to an arrangement that can be put on a calendar.","Not every wish is a schedule. Use たい for what you want and 予定 for what is planned or arranged.","よていです",[e("らいしゅう、かいぎをするよていです。","らいしゅう、かいぎをするよていです。","We plan to hold a meeting next week.",[["らいしゅう","next week"],["かいぎをするよていです","a meeting is scheduled"]],["会議"],["A meeting is scheduled for next week."]),e("にちようびにあつまるよていです。","にちようびにあつまるよていです。","We plan to gather on Sunday.",[["にちようびに","on Sunday"],["あつまるよていです","we are scheduled to gather"]],["集まる"])],[t("集まります → scheduled plan","あつまるよていです")]),n(5,"decide","Dictionary / ない form + ことにする","A decision you make","ことにする presents a decision made by the person concerned: あしたあつまることにしました, “We decided to change the place.” The action before こと stays in dictionary form, or in a negative plain form when deciding not to do it.","The final した places the decision in the past. The planned action may still be in the future.","ことにしました",[e("あしたあつまることにしました。","あしたあつまることにしました。","We decided to gather tomorrow.",[["あしたあつまる","gather tomorrow"],["ことにしました","we made that decision"]],["集まる"],["I decided to gather tomorrow."]),e("あしたはいかないことにしました。","あしたはいかないことにしました。","I decided not to go tomorrow.",[["あしたはいかない","not go tomorrow"],["ことにしました","I decided"]],[],["We decided not to go tomorrow."])],[t("行かない → polite past personal decision","いかないことにしました")]),n(5,"arranged","Dictionary form + ことになる","A decision comes about","ことになる presents a decision or arrangement as something that came about, without emphasizing the speaker as its decision maker. かいぎはげつようびにすることになりました means it has been decided to have the meeting on Monday. The context may be a group decision or an arrangement made by others.","This does not always mean someone forced you. It shifts attention from your personal decision to the resulting arrangement.","ことになりました",[e("かいぎはげつようびにすることになりました。","かいぎはげつようびにすることになりました。","It has been decided to hold the meeting on Monday.",[["かいぎは","the meeting"],["げつようびにする","have it on Monday"],["ことになりました","that arrangement has been made"]],["会議"]),e("らいしゅうあつまることになりました。","らいしゅうあつまることになりました。","It has been arranged that we will gather next week.",[["らいしゅうあつまる","gather next week"],["ことになりました","it has been arranged"]],["集まる"],["We are now scheduled to gather next week."])],[t("集まる → an arrangement came about, polite past","あつまることになりました")]),n(6,"automatic-to","Dictionary / ない form + と","A regular consequence","Use と for a regular or predictable consequence: みぎにまがると、えきがあります, “Turn right and there is the station.” It is useful for directions, instructions, and things that regularly happen. The consequence follows naturally from the condition.","In this basic use, a personal invitation or command is not the ordinary consequence clause. Learn たら for a particular condition followed by a request.","と",[e("みぎにまがると、えきがあります。","みぎにまがると、えきがあります。","If you turn right, there is a station.",[["みぎにまがると","on turning right"],["えきがあります","there is a station"]],["曲がる"],["Turn right and you will find a station."]),e("しんごうがあおになると、くるまがうごきます。","しんごうがあおになると、くるまがうごきます。","When the light turns green, the cars move.",[["しんごうがあおになると","when the traffic light turns green"],["くるまがうごきます","the cars move"]],["信号","動く"])],[t("曲がる → regular consequence clause","まがると")],["Identify a regular cause and consequence.","Keep the first action in dictionary form: 曲がる.","Attach と: 曲がると.","State what follows regularly or what someone will find there."]),n(6,"particular-tara","た form + ら","When that particular condition is met","You met たら in N5. Now use it for a specific condition or a completed prerequisite. えきについたら、れんらくしてください means “When you arrive at the station, please contact me.” The past-looking form does not make the arrival past; it establishes the condition as completed before the request.","たら can introduce an unreal condition too. Time and context decide whether “if” or “when” is the natural English reading.","たら",[e("えきについたら、れんらくしてください。","えきについたら、れんらくしてください。","When you arrive at the station, please contact me.",[["えきについたら","when you have arrived at the station"],["れんらくしてください","please contact me"]],["着く","連絡"],["If you arrive at the station, please contact me."]),e("じかんがあったら、あるきましょう。","じかんがあったら、あるきましょう。","If we have time, let’s walk.",[["じかんがあったら","if there is time"],["あるきましょう","let us walk"]])],[t("着く → たら condition","ついたら")]),n(6,"conditional-ba","e-row + ば / ければ","A condition that enables a result","For a godan verb, use its e-row sound plus ば: 行く → 行けば. For an ichidan verb, replace る with れば: 食べれば. An い-adjective changes い to ければ: 安ければ. A negative form changes ない to なければ. This often presents a condition needed for a desired result.","The difference from たら depends on the situation and the second clause. Do not memorize a rule that ば can never appear with an invitation; learn a clear example first.","ば",[e("いそげば、でんしゃにまにあいます。","いそげば、でんしゃにまにあいます。","If you hurry, you will catch the train.",[["いそげば","if you hurry"],["でんしゃにまにあいます","you will be in time for the train"]],["急ぐ","間に合う"],["If you hurry, you will be in time for the train."]),e("やすければ、このきっぷをかいます。","やすければ、このきっぷをかいます。","If it is inexpensive, I will buy this ticket.",[["やすければ","if it is inexpensive"],["このきっぷをかいます","I will buy this ticket"]])],[t("急ぐ → ば condition","いそげば"),t("食べる → ば condition","たべれば"),t("安い → ば condition","やすければ"),t("行かない → ば condition","いかなければ")]),n(6,"premise-nara","Plain clause / N + なら","Respond to a stated situation","なら takes up a premise: something the listener has mentioned or a situation being considered. おんせんにいくなら、バスがべんりです means “If you are going to the hot spring, the bus is convenient.” You offer information relevant to that plan.","Unlike a simple “after that happens” sequence, the advice can concern what to do before the planned action. Nouns and な-adjectives normally omit だ before なら.","なら",[e("おんせんにいくなら、バスがべんりです。","おんせんにいくなら、バスがべんりです。","If you are going to the hot spring, the bus is convenient.",[["おんせんにいくなら","if the hot spring is your plan"],["バスがべんりです","the bus is convenient"]],["温泉"]),e("きょうとなら、このちずがべんりです。","きょうとなら、このちずがべんりです。","If you mean Kyoto, this map is useful.",[["きょうとなら","if Kyoto is the place you mean"],["このちずがべんりです","this map is useful"]],[],["For Kyoto, this map is useful."])],[t("温泉に行く → premise with なら","おんせんにいくなら")]),n(6,"even-if","て form + も","Even if the condition holds","ても introduces a condition that does not change the result: あめがふっても、いきます, “Even if it rains, I will go.” An い-adjective uses くても; a noun or な-adjective uses でも. The contrast matters: the result holds despite that circumstance.","Do not remove “even” when it changes the point of the sentence. The speaker says the obstacle will not stop the result.","ても",[e("あめがふっても、いきます。","あめがふっても、いきます。","Even if it rains, I will go.",[["あめがふっても","even if it rains"],["いきます","I will go"]],[],["I will go even if it rains."]),e("たかくても、このきっぷをかいます。","たかくても、このきっぷをかいます。","Even if it is expensive, I will buy this ticket.",[["たかくても","even if it is expensive"],["このきっぷをかいます","I will buy this ticket"]])],[t("降る → even if it rains","ふっても"),t("高い → even if expensive","たかくても")]),n(6,"without-condition","ない → なくても","Even without that action","Replace a verb’s ない with なくても to say the result holds even if that action does not happen. いそがなくても、まにあいます means “We will be in time even without hurrying.” You already know なくてもいい for “do not have to”; here, another result follows.","Keep this different from a positive ても clause. Not hurrying is the condition in いそがなくても.","なくても",[e("いそがなくても、まにあいます。","いそがなくても、まにあいます。","We will be in time even without hurrying.",[["いそがなくても","even if we do not hurry"],["まにあいます","we will be in time"]],["急ぐ","間に合う"],["Even if we do not hurry, we will be in time."]),e("ちずがなくても、いけます。","ちずがなくても、いけます。","I can get there even without a map.",[["ちずがなくても","even without a map"],["いけます","can get there"]],[],["Even without a map, I can go."])],[t("急がない → even without hurrying","いそがなくても")]),n(7,"action-result","N を開ける / N が開く","Someone acts; something changes","開ける describes opening something: わたしがまどをあけます. 開く describes the window opening: まどがあきます. Many verbs form useful transitive and intransitive pairs. Learn each pair with a small event and its particles; endings alone do not reliably tell you every pair.","The object of 開ける uses を. The thing that opens with 開く uses が. Do not turn every intransitive sentence into an English passive.","あきました",[e("まどがあきました。","まどがあきました。","The window opened.",[["まどが","the window, which changed"],["あきました","opened"]],["開く"]),e("わたしがまどをあけました。","わたしがまどをあけました。","I opened the window.",[["わたしが","I did the action"],["まどを","the window, the object"],["あけました","opened it"]],["開ける"])],[t("The window opens: 開く → polite past","あきました"),t("Someone opens it: 開ける → polite past","あけました")],["Picture a window opening.","To name the changing thing, use 窓が開く.","To name someone acting on it, use 人が窓を開ける.","Practice the pair together without guessing a universal rule from the endings."]),n(7,"result-state","Intransitive ている","The result is still there","With a change-of-state verb, ている often describes the resulting state. まどがあいています means the window is open, not that it is repeatedly opening. With an ongoing action such as 読む, the same ている construction can describe something happening now. The verb’s meaning matters.","Do not translate every ている as English “is doing.” In a result-state sentence, describe the state left by the change.","あいています",[e("まどがあいています。","まどがあいています。","The window is open.",[["まどが","the window"],["あいています","is in the open state"]],["開く"]),e("でんきがついています。","でんきがついています。","The light is on.",[["でんきが","the light"],["ついています","is on"]],["付く"])],[t("開く → the window is open, politely","あいています"),t("付く → the light is on, politely","ついています")]),n(7,"prepared-state","Transitive てある","A state left deliberately ready","てある with a transitive verb describes a resulting state produced by someone’s intentional action. かぎがかけてあります means the lock has been secured. The actor can stay unmentioned because the prepared result is what matters.","Compare ておく, which presents doing preparation, with てある, which presents its existing result. Not every natural state was intentionally prepared.","てあります",[e("まどがあけてあります。","まどがあけてあります。","The window has been left open.",[["まどが","the window"],["あけてあります","has been opened and left that way deliberately"]],["開ける"]),e("ちずがかべにかけてあります。","ちずがかべにかけてあります。","A map has been hung on the wall.",[["ちずが","a map"],["かべに","on the wall"],["かけてあります","has been hung there deliberately"]],["壁","掛ける"])],[t("開ける → a deliberately prepared open state","あけてあります")]),n(7,"unchanged","た form + まま","Leave the state unchanged","まま describes a state continuing without being changed. まどをあけたままねました means “I slept with the window left open.” A negative form can describe an action not done: かぎをかけないまま. The main action comes after the unchanged state.","まま itself does not say the unchanged state was intentional or careless. Context supplies that judgment.","たまま",[e("まどをあけたままねました。","まどをあけたままねました。","I slept with the window left open.",[["まどをあけたまま","with the window left open"],["ねました","I slept"]],["開ける"]),e("でんきをつけたままねました。","でんきをつけたままねました。","I slept with the light left on.",[["でんきをつけたまま","with the light left on"],["ねました","I slept"]],["付ける"])],[t("開ける → with it left open","あけたまま")]),n(7,"habit-effort","Dictionary / ない form + ようにする","Make an effort to keep a habit","ようにする describes a deliberate effort or practice. まいにちかくにんするようにしています means “I make a habit of checking every day.” The ています form presents that effort as ongoing. This is different from ようになる, a change that develops.","A personal decision is ことにする; ようにする emphasizes trying to keep the action happening or prevent it from happening.","ようにしています",[e("まいにちかくにんするようにしています。","まいにちかくにんするようにしています。","I make a habit of checking every day.",[["まいにち","every day"],["かくにんするようにしています","make a habit of checking"]],["確認"]),e("わすれものをしないようにしています。","わすれものをしないようにしています。","I try not to leave things behind.",[["わすれものをしない","not leave things behind"],["ようにしています","make an effort to do so"]],["忘れ物"])],[t("確認する → an ongoing effort to do it","かくにんするようにしています")]),n(7,"habit-request","Dictionary / ない form + ようにしてください","Ask for care over time","ようにしてください asks someone to make sure to do something or take care not to do it. It is useful for routines and continuing precautions: わすれないようにしてください. A simple てください more directly requests a particular action.","This is still a request. It is not automatically more respectful in every relationship; tone and context remain important.","ようにしてください",[e("わすれないようにしてください。","わすれないようにしてください。","Please make sure you do not forget.",[["わすれない","not forget"],["ようにしてください","please take care to ensure this"]],[],["Please be careful not to forget."]),e("まいにちかくにんするようにしてください。","まいにちかくにんするようにしてください。","Please make sure you check every day.",[["まいにちかくにんする","check every day"],["ようにしてください","please make sure you do this"]],["確認"])],[t("忘れない → ask someone to take care not to forget","わすれないようにしてください")]),n(8,"appearance","Verb stem / adjective stem + そう","What it looks like to you","Attach そう to an い-adjective without its final い, or to a な-adjective stem, to describe an impression from what you can observe: おいしそう, げんきそう. This reports how something appears, not a fact learned from another person. いい becomes よさそう; ない becomes なさそう.","A verb’s ます stem + そう can describe something about to happen: 降りそう, looks likely to rain. This is different from plain-form hearsay そう.","そうです",[e("あめがふりそうです。","あめがふりそうです。","It looks like it is going to rain.",[["あめが","rain"],["ふりそうです","looks about to fall"]],["降る"],["It looks likely to rain.","It looks like rain."]),e("このケーキはおいしそうです。","このケーキはおいしそうです。","This cake looks delicious.",[["このケーキは","this cake"],["おいしそうです","looks delicious"]])],[t("おいしい → looks delicious","おいしそう"),t("降る → looks about to rain","ふりそう")]),n(8,"hearsay","Plain statement + そうです","What you have heard","Put a complete plain statement before そうです to report information from elsewhere: あしたあめがふるそうです, “I hear it will rain tomorrow.” Unlike appearance そう, the verb stays in dictionary form and an い-adjective keeps い. Nouns and な-adjectives retain だ.","A source such as the forecast helps listeners understand the report. Hearsay does not guarantee the report is true.","そうです",[e("よほうでは、あしたあめがふるそうです。","よほうでは、あしたあめがふるそうです。","According to the forecast, it will rain tomorrow.",[["よほうでは","according to the forecast"],["あしたあめがふるそうです","it is reported that rain will fall tomorrow"]],["予報","降る"],["The forecast says it will rain tomorrow."]),e("あのりょうりはおいしいそうです。","あのりょうりはおいしいそうです。","I hear that dish is delicious.",[["あのりょうりは","that dish"],["おいしいそうです","I hear it is delicious"]],["料理"])],[t("おいしい → I hear it is delicious","おいしいそうです"),t("元気だ → I hear they are well","げんきだそうです")],["Identify the source of the information.","Make the complete plain statement: あした雨が降る.","Attach そうです without removing the verb or adjective ending.","Compare 降りそう, an observed impression, with 降るそう, reported information."]),n(8,"seems","Plain clause / N + みたい","An impression from the clues","みたい describes an impression or resemblance based on what you notice. るすみたいです means “It seems they are out.” A noun or な-adjective attaches without だ. This form is common in conversation; ようです is often more formal.","An impression is not certainty. Make the clues clear in an exercise instead of asking learners to choose between several equally natural guesses.","みたいです",[e("でんきがきえています。るすみたいです。","でんきがきえています。るすみたいです。","The light is off. It seems they are out.",[["でんきがきえています","the light is off"],["るすみたいです","it seems nobody is home"]],["消える","留守"],["The light is off. They seem to be out."]),e("あのくもはやまみたいです。","あのくもはやまみたいです。","That cloud looks like a mountain.",[["あのくもは","that cloud"],["やまみたいです","resembles a mountain"]],[],["That cloud is like a mountain."])],[t("留守だ → a conversational impression","るすみたいです")]),n(8,"possible","Plain clause + かもしれない","Leave room for a possibility","かもしれない expresses a possibility without presenting it as certain: でんしゃがおくれるかもしれません. The polite form is かもしれません. Verbs and い-adjectives use their plain forms; nouns and な-adjectives omit だ.","Do not attach an invented percentage to this expression. The speaker leaves the possibility open, and the context indicates how serious it is.","かもしれません",[e("でんしゃがおくれるかもしれません。","でんしゃがおくれるかもしれません。","The train might be late.",[["でんしゃが","the train"],["おくれるかもしれません","may be late"]],["遅れる"],["The train may be delayed."]),e("あしたはあめかもしれません。","あしたはあめかもしれません。","It might rain tomorrow.",[["あしたは","tomorrow"],["あめかもしれません","rain is a possibility"]],[],["It may be rainy tomorrow."])],[t("遅れる → politely express a possibility","おくれるかもしれません")]),n(8,"probably","Plain clause + でしょう","A prediction with some distance","でしょう can present a prediction or an inference, often politely: あしたはさむいでしょう. A noun or な-adjective normally omits だ before it. With a rising tone, the same form can seek agreement or confirmation. Meaning depends on both the situation and the delivery.","A written exercise needs context. A forecast-like statement and a rising “isn’t it?” question are different uses, even though the written ending matches.","でしょう",[e("よほうでは、あしたはさむいでしょう。","よほうでは、あしたはさむいでしょう。","According to the forecast, it will probably be cold tomorrow.",[["よほうでは","according to the forecast"],["あしたはさむいでしょう","tomorrow will probably be cold"]],["予報"]),e("らいしゅうはさむいでしょう。","らいしゅうはさむいでしょう。","It will probably be cold next week.",[["らいしゅうは","next week"],["さむいでしょう","will probably be cold"]])],[t("寒い → a polite prediction","さむいでしょう")]),n(8,"expectation","Plain clause + はずです","An expectation with a reason","はず expresses an expectation based on what you know. If your friend said they sent a reply, へんじはとどくはずです means you expect the reply to arrive. Nouns use の and な-adjectives use な before はず.","An expectation can turn out to be wrong. はず does not turn your inference into a promise or an absolute certainty.","はずです",[e("へんじはあしたとどくはずです。","へんじはあしたとどくはずです。","The reply should arrive tomorrow.",[["へんじは","the reply"],["あしたとどくはずです","is expected to arrive tomorrow"]],["返事","届く"],["I expect the reply to arrive tomorrow."]),e("にちようびなので、しずかなはずです。","にちようびなので、しずかなはずです。","It should be quiet because it is Sunday.",[["にちようびなので","because it is Sunday"],["しずかなはずです","it is expected to be quiet"]])],[t("静かだ → a reasoned expectation","しずかなはずです")]),n(9,"purpose-tameni","Dictionary form / N の + ために","An action toward a goal","ために connects a deliberate goal with what someone does to achieve it. けんこうのためにうんどうします means “I exercise for my health.” A noun needs の; a controllable action uses dictionary form: 留学するために.","A purpose is not the same as a cause, even though ため has causal uses elsewhere. Start with a clear goal and an intentional action.","ために",[e("けんこうのためにうんどうします。","けんこうのためにうんどうします。","I exercise for my health.",[["けんこうのために","for my health, the goal"],["うんどうします","I exercise"]],["健康","運動"]),e("りゅうがくするためににほんごをべんきょうします。","りゅうがくするためににほんごをべんきょうします。","I study Japanese in order to study abroad.",[["りゅうがくするために","in order to study abroad"],["にほんごをべんきょうします","I study Japanese"]],["留学"])],[t("健康 + for the purpose of","けんこうのために"),t("留学する + in order to","りゅうがくするために")]),n(9,"purpose-youni","Potential / ない form + ように","Act so a state becomes possible","ように can present a desired state or ability as the goal: わすれないように、くすりのなまえをノートにかきます. The goal is not forgetting; putting the medicine here is the action taken to support it. Potential and negative forms are especially useful before this ように.","Compare a deliberate action-goal with ために and a desired ability or state with ように. Some situations allow both, with a change of emphasis.","ように",[e("わすれないように、くすりのなまえをノートにかきます。","わすれないように、くすりのなまえをノートにかきます。","I will write the medicine’s name in my notebook so I do not forget it.",[["わすれないように","so that I do not forget"],["くすりのなまえをノートにかきます","I will write the medicine’s name in my notebook"]],["薬"]),e("はやくなおるように、よくねます。","はやくなおるように、よくねます。","I will sleep well so I can recover quickly.",[["はやくなおるように","so that I recover quickly"],["よくねます","I will sleep well"]],["治る"])],[t("忘れない → so as not to forget","わすれないように")]),n(9,"deadline","Time までに","A deadline, not a duration","までに marks the latest time by which an action should be completed. さんじまでにきてください means “Please come by three.” Compare さんじまでまちます, “I will wait until three,” where まで marks the end of a continuing action.","By a deadline and until an endpoint are different messages. Keep に in までに when completion before that time is the point.","までに",[e("さんじまでにきてください。","さんじまでにきてください。","Please come by three o’clock.",[["さんじまでに","by three o’clock, the deadline"],["きてください","please come"]],[],["Please arrive by three o’clock."]),e("きんようびまでによやくしてください。","きんようびまでによやくしてください。","Please make a reservation by Friday.",[["きんようびまでに","by Friday"],["よやくしてください","please make a reservation"]],["予約"])],[t("三時 + by the deadline","さんじまでに")]),n(9,"interval","Plain ongoing clause / N の + 間に","Something happens within a window","間に places an event within a continuing period: ほんをよんでいるあいだに、ともだちがきました. The rest continued for a while, and the rain stopped at some point during that period. A noun uses の before 間に.","間 without に often describes an action continuing throughout the period. With に, focus on an event that occurs within that window.","あいだに",[e("ほんをよんでいるあいだに、ともだちがきました。","ほんをよんでいるあいだに、ともだちがきました。","My friend came while I was reading a book.",[["ほんをよんでいるあいだに","while I was reading a book"],["ともだちがきました","my friend came"]],[],["While I was reading a book, my friend came."]),e("きゅうけいのあいだにみずをのみました。","きゅうけいのあいだにみずをのみました。","I drank water during the break.",[["きゅうけいのあいだに","during the break"],["みずをのみました","I drank water"]],["休憩"])],[t("休憩 + during the break, an event within it","きゅうけいのあいだに")]),n(9,"without-doing","ない form + で","Do one thing without doing another","Attach で to a plain negative verb: たべないででかけました, “I went out without eating.” The subject performs the main action while the first action is not done. The final verb carries the tense.","ないでください is a request not to act. In a sentence with a separate main action, ないで can instead mean “without doing.”","ないで",[e("あさごはんをたべないで、がっこうにいきました。","あさごはんをたべないで、がっこうにいきました。","I went to school without eating breakfast.",[["あさごはんをたべないで","without eating breakfast"],["がっこうにいきました","I went to school"]]),e("むりしないで、やすんでください。","むりしないで、やすんでください。","Please rest without overdoing it.",[["むりしないで","without pushing yourself too hard"],["やすんでください","please rest"]],["無理する"],["Do not overdo it. Please rest."])],[t("食べない → without eating","たべないで")]),n(9,"advice","た / ない form + ほうがいい","Offer advice with care","For positive advice, use a た-form verb before ほうがいい: やすんだほうがいいです. For advice against an action, use the plain negative: むりしないほうがいいです. The past-looking た form in positive advice does not mean the action already happened.","Advice can sound strong or intrusive. Consider the other person’s situation and use the pattern as a suggestion rather than a command.","ほうがいいです",[e("きょうはやすんだほうがいいです。","きょうはやすんだほうがいいです。","You should rest today.",[["きょうは","today"],["やすんだほうがいいです","it would be better to rest"]],[],["It would be better to rest today."]),e("むりしないほうがいいです。","むりしないほうがいいです。","You should not overdo it.",[["むりしないほうがいいです","it would be better not to push yourself too hard"]],["無理する"],["It would be better not to overdo it."])],[t("休む → positive advice, politely","やすんだほうがいいです"),t("無理する → advice against it, politely","むりしないほうがいいです")]),n(10,"passive-form","Godan a-row + れる / ichidan られる","Build a passive form","For a godan verb, use its a-row sound plus れる: 招く → 招かれる. A final う uses われる: 言う → 言われる. For an ichidan verb, replace る with られる: ほめる → ほめられる. する becomes される; 来る becomes こられる. These forms then conjugate like ichidan verbs.","Ichidan passive and potential forms can look identical. The people, particles, and situation decide the reading. Begin with event announcements where the passive meaning is clear.","ひらかれます",[e("にちようびにまつりがひらかれます。","にちようびにまつりがひらかれます。","A festival will be held on Sunday.",[["にちようびに","on Sunday"],["まつりがひらかれます","a festival will be held"]],["祭り","開く"]),e("ここでかいぎがひらかれました。","ここでかいぎがひらかれました。","A meeting was held here.",[["ここで","here"],["かいぎがひらかれました","a meeting was held"]],["会議"])],[t("招く → plain passive","まねかれる"),t("言う → plain passive","いわれる"),t("する → plain passive","される")],["Keep the ordinary action in mind: someone holds a festival.","Build the passive from 開く, read ひらく for holding an event.","Move attention to the event: 祭りが開かれる.","Add the polite ending: 開かれます. The organizer can remain unstated."]),n(10,"passive-roles","Receiver は actor に passive","Change the viewpoint, not the event","A direct passive makes the affected person the topic or subject. はるはゆきにまねかれました means Haru was invited by Yuki. Yuki does the inviting; Haru receives the invitation. Compare the active ゆきがはるをまねきました.","Keep the actors explicit while learning. Reversing the names changes who invited whom, even when the vocabulary is otherwise right.","まねかれました",[e("はるはゆきにまねかれました。","はるはゆきにまねかれました。","Haru was invited by Yuki.",[["はるは","Haru, the person invited"],["ゆきに","by Yuki, who invited"],["まねかれました","was invited"]],["招く"],["Yuki invited Haru."]),e("わたしはせんせいにしょうかいされました。","わたしはせんせいにしょうかいされました。","I was introduced by the teacher.",[["わたしは","I, the person introduced"],["せんせいに","by the teacher"],["しょうかいされました","was introduced"]],["紹介"])],[t("招く → polite passive past","まねかれました")],["Start with Yuki invites Haru.","Choose Haru as the person whose experience you describe.","Mark the inviter Yuki with に.","Use 招かれました. The event is unchanged; the viewpoint changes."]),n(10,"public-passive","Event が passive","Let the event take the foreground","Notices often foreground an event, product, or service rather than its organizer. このまつりはまいとしひらかれます means the festival is held every year. This lets readers focus on the public information they need. The person doing the organizing may not be relevant.","English sometimes uses an active subject such as “they.” A natural translation can preserve the event without inventing a particular organizer.","ひらかれます",[e("このまつりはまいとしひらかれます。","このまつりはまいとしひらかれます。","This festival is held every year.",[["このまつりは","this festival"],["まいとしひらかれます","is held every year"]],["祭り","開く"]),e("にほんのぶんかがしょうかいされます。","にほんのぶんかがしょうかいされます。","Japanese culture will be introduced.",[["にほんのぶんかが","Japanese culture"],["しょうかいされます","will be introduced"]],["文化","紹介"])],[t("紹介する → polite passive","しょうかいされます")]),n(10,"possession-passive","Person は possession を passive","An event affects something of yours","Japanese can present a person as affected when something belonging to them is involved: わたしはさいふをぬすまれました. The wallet keeps を, while the person is the topic. A natural English translation is “My wallet was stolen.” This is not the same structure as making the wallet the Japanese subject.","The possession stays an object in this construction. Start with clear possession examples before subtler adversity passives.","ぬすまれました",[e("わたしはさいふをぬすまれました。","わたしはさいふをぬすまれました。","My wallet was stolen.",[["わたしは","I, the affected owner"],["さいふを","my wallet, the thing stolen"],["ぬすまれました","experienced it being stolen"]],["財布","盗む"],["I had my wallet stolen."]),e("はるはかばんをぬすまれました。","はるはかばんをぬすまれました。","Haru’s bag was stolen.",[["はるは","Haru, the affected owner"],["かばんを","Haru’s bag"],["ぬすまれました","experienced it being stolen"]],["盗む"],["Haru had their bag stolen."])],[t("盗む → polite passive past","ぬすまれました")]),n(10,"causative","Godan a-row + せる / ichidan させる","Someone causes or allows an action","For a godan verb, add せる to its a-row sound: 並ぶ → 並ばせる. For an ichidan verb, replace る with させる: 食べる → 食べさせる. する becomes させる; 来る becomes こさせる. A causative means causing or allowing another person to act. Context distinguishes making from letting.","Do not require “make” or “let” without context that selects coercion or permission. Start with clear roles and a visible situation.","ならばせました",[e("かかりのひとはこどもたちをならばせました。","かかりのひとはこどもたちをならばせました。","The person in charge had the children line up.",[["かかりのひとは","the person in charge, who causes the action"],["こどもたちを","the children, who line up"],["ならばせました","had them line up"]],["係","子どもたち","並ぶ"],["The person in charge made the children line up.","The person in charge let the children line up."]),e("はははこどもをやすませました。","はははこどもをやすませました。","The mother let the child rest.",[["ははは","the mother"],["こどもを","the child, who rests"],["やすませました","caused or allowed the rest"]],[],["The mother had the child rest.","The mother made the child rest."])],[t("並ぶ → plain causative","ならばせる"),t("食べる → plain causative","たべさせる"),t("する → plain causative","させる")],["Identify the person causing or allowing the action.","Identify the person who actually performs it.","Build the causative form, then add tense and politeness.","Use the situation to decide whether “make,” “have,” or “let” fits in English."]),n(10,"let-me","Causative て + ください","Ask to be allowed to act","かえらせてください means “Please let me go home.” The speaker will do the going; the listener is asked to allow it. Build 帰る → 帰らせる → 帰らせて, then add ください. Compare 帰ってください, which asks the listener to go home.","The difference between “Please go” and “Please let me go” is a difference in who acts. Keep it explicit in practice.","かえらせてください",[e("きょうははやくかえらせてください。","きょうははやくかえらせてください。","Please let me go home early today.",[["きょうははやく","early today"],["かえらせてください","please allow me to go home"]]),e("わたしにもさんかさせてください。","わたしにもさんかさせてください。","Please let me participate too.",[["わたしにも","me too"],["さんかさせてください","please allow me to participate"]],["参加"])],[t("帰る → please let me go home","かえらせてください")]),n(11,"respect-context","Polite ending ≠ respectful viewpoint","Notice whose action it is","です and ます address the listener politely. Respectful expressions describe another person’s action with respect; humble expressions describe the speaker’s side in relation to someone respected. These are different choices. First identify the actor and the relationship, then choose the expression.","Do not use a respectful verb to elevate your own action. The same person can need different wording in different social situations.","いらっしゃいます",[e("おきゃくさまがいらっしゃいます。","おきゃくさまがいらっしゃいます。","A guest is here.",[["おきゃくさまが","a guest, treated respectfully"],["いらっしゃいます","is here; respectful form of いる"]],["お客様","いらっしゃる"],["There is a guest here."]),e("あした、せんせいがいらっしゃいます。","あした、せんせいがいらっしゃいます。","The teacher will come tomorrow.",[["あした","tomorrow"],["せんせいがいらっしゃいます","the teacher will come, respectfully"]],["いらっしゃる"])],[t("いらっしゃる → polite non-past","いらっしゃいます")],["Identify the actor: here it is a guest or teacher.","Decide whether you are describing that person with respect.","Choose the respectful verb, such as いらっしゃる.","Keep the final ます form to address your listener politely as well."]),n(11,"respect-verbs","召し上がる / ご覧になる / おっしゃる","A few frequent respectful verbs","Some frequent verbs have special respectful forms. 食べる and 飲む use 召し上がる; 見る uses ご覧になる; 言う uses おっしゃる. Learn them in whole sentences with a clear actor rather than treating them as interchangeable decorations.","いらっしゃる and おっしゃる have special polite forms: いらっしゃいます and おっしゃいます. Do not form おっしゃります in the standard pattern.","めしあがります",[e("せんせいはおちゃをめしあがります。","せんせいはおちゃをめしあがります。","The teacher drinks tea.",[["せんせいは","the teacher, described respectfully"],["おちゃを","tea"],["めしあがります","drinks; respectful"]],["召し上がる"]),e("せんせいがしゃしんをごらんになります。","せんせいがしゃしんをごらんになります。","The teacher will look at the photographs.",[["せんせいが","the teacher"],["しゃしんを","the photographs"],["ごらんになります","will look; respectful"]],["ご覧になる"])],[t("おっしゃる → polite non-past","おっしゃいます"),t("召し上がる → polite non-past","めしあがります")]),n(11,"humble-verbs","伺う / 申す / いただく","Describe your side with care","Humble expressions place the speaker’s side modestly in relation to someone respected. 先生のところへ伺います describes your visit to the teacher; 田中と申します is a formal self-introduction. いただく can express receiving from someone, or eating and drinking humbly in an appropriate setting.","Humble does not mean making every action “more polite” regardless of its actor. Keep the speaker’s side and the respected person’s side distinct.","うかがいます",[e("あした、せんせいのところへうかがいます。","あした、せんせいのところへうかがいます。","I will visit the teacher tomorrow.",[["あした","tomorrow"],["せんせいのところへ","to the teacher’s place"],["うかがいます","I will visit; humble"]],["伺う"]),e("たなかともうします。","たなかともうします。","My name is Tanaka.",[["たなかともうします","I am called Tanaka; a formal self-introduction"]],["申す"],["I am Tanaka."])],[t("伺う → polite non-past","うかがいます"),t("申す → polite non-past","もうします")]),n(11,"respect-pattern","お + verb stem + になる","Build a regular respectful expression","For many ordinary native Japanese verbs, お + ます stem + になる describes another person’s action respectfully. 待ちます → お待ちになります. The person being respected still performs the action. Some verbs have a special respectful form that is more usual than this construction.","This is not a formula for every verb. Use the special forms you have learned for common verbs such as 見る and 食べる.","おまちになります",[e("せんせいはここでおまちになります。","せんせいはここでおまちになります。","The teacher will wait here.",[["せんせいは","the teacher"],["ここで","here"],["おまちになります","will wait; respectful"]]),e("ぶちょうはさんじにおかえりになります。","ぶちょうはさんじにおかえりになります。","The department manager will leave at three.",[["ぶちょうは","the department manager"],["さんじに","at three"],["おかえりになります","will leave or return; respectful"]],["部長"])],[t("待ちます → respectful polite expression","おまちになります")]),n(11,"humble-pattern","お + verb stem + する","An action from your side toward theirs","お + verb stem + する can humbly describe an action directed toward someone respected. お持ちします offers to carry or bring something for that person. The speaker’s side acts; the other person is the respected recipient or target.","Not every action can be made humble with this pattern. A relationship to the respected person must make sense; do not apply it mechanically to unrelated private actions.","おもちします",[e("おにもつをおもちします。","おにもつをおもちします。","I will carry your luggage.",[["おにもつを","your luggage, politely"],["おもちします","I will carry it for you; humble"]],[],["I will bring your luggage."]),e("こちらでおまちします。","こちらでおまちします。","I will wait here for you.",[["こちらで","here, politely"],["おまちします","I will wait for you; humble"]],[],["I will wait here."])],[t("持ちます → humble polite offer","おもちします")]),n(11,"considerate-request","Verb ていただけませんか","A considerate request for help","ていただけませんか is a considerate request framed as asking whether you could receive the other person’s action. もういちどおしえていただけませんか means “Could you explain it once more?” The listener performs the requested action; the speaker benefits.","A longer expression is not a substitute for a reasonable request. Use it when the relationship and situation call for this degree of care.","ていただけませんか",[e("もういちどおしえていただけませんか。","もういちどおしえていただけませんか。","Could you explain it once more?",[["もういちど","once more"],["おしえていただけませんか","could you explain it to me; considerate request"]],[],["Could you tell me one more time?","Could you teach me once more?"]),e("おなまえをかいていただけませんか。","おなまえをかいていただけませんか。","Could you write your name?",[["おなまえを","your name, politely"],["かいていただけませんか","could you write it; considerate request"]])],[t("教える → request with ていただけませんか","おしえていただけませんか")])],w=[`住|reside|じゅう|すむ|7
所|place|しょ|ところ|8
引|pull|いん|ひく|4
越|cross over|えつ|こす|12
借|borrow|しゃく|かりる|10
貸|lend|たい|かす|12
賃|payment|ちん|—|13
必|necessary|ひつ|かならず|5
要|need|よう|いる|9
不|not|ふ・ぶ|—|4
便|convenience|べん・びん|たより|9
全|whole|ぜん|すべて|6
説|explain|せつ|とく|14
理|reason|り|—|11
由|reason; origin|ゆ|よし|5
困|be troubled|こん|こまる|7`,`練|practice|れん|ねる|14
習|learn|しゅう|ならう|11
泳|swim|えい|およぐ|8
景|scenery|けい|—|12
色|color|しょく・しき|いろ|6
声|voice|せい|こえ|7
音|sound|おん|おと|9
最|most|さい|もっとも|12
近|near|きん|ちかい|7
続|continue|ぞく|つづく|13
趣|interest|しゅ|おもむき|15
味|taste|み|あじ|8
参|participate|さん|まいる|8
加|add|か|くわえる|5
料|materials; fee|りょう|—|10
無|nothing|む・ぶ|ない|12`,`小|small|しょう|ちいさい|3
雑|miscellaneous|ざつ|—|14
誌|journal|し|—|14
作|make|さく|つくる|7
者|person|しゃ|もの|8
探|search|たん|さがす|11
返|return|へん|かえす|7
受|receive|じゅ|うける|8
付|attach|ふ|つける|5
文|writing|ぶん・もん|ふみ|4
章|chapter|しょう|—|11
意|meaning; intention|い|—|13
内|inside|ない|うち|4
容|contain|よう|—|10
調|investigate|ちょう|しらべる|15
選|choose|せん|えらぶ|15
質|quality|しつ|—|15
問|question|もん|とう|11`,`答|answer|とう|こたえる|12
正|correct|せい|ただしい|5
知|know|ち|しる|8
識|knowledge|しき|—|19
興|interest|こう|おこる|16
経|pass through|けい|へる|11
験|test|けん|—|18
規|rule|き|—|11
則|rule|そく|—|9
席|seat|せき|—|10
予|beforehand|よ|—|4
約|promise|やく|—|9
法|method|ほう|—|8
試|try|し|ためす|13
準|standard; prepare|じゅん|—|13
備|prepare|び|そなえる|12`,`材|material|ざい|—|7
切|cut|せつ|きる|4
焼|bake; burn|しょう|やく|12
混|mix|こん|まぜる|11
沸|boil|ふつ|わく|8
包|wrap|ほう|つつむ|5
丁|town block; counter|ちょう・てい|—|2
使|use|し|つかう|8
柔|soft|じゅう|やわらかい|9
硬|hard|こう|かたい|12
苦|bitter; suffering|く|にがい|8
濃|concentrated|のう|こい|16
薄|thin|はく|うすい|16
量|quantity|りょう|はかる|12
残|remain|ざん|のこる|10
冷|cold|れい|つめたい|7`,`蔵|storehouse|ぞう|くら|15
庫|warehouse|こ|—|10
皿|plate|べい|さら|5
助|help|じょ|たすける|7
届|deliver; reach|—|とどく|8
贈|give a gift|ぞう|おくる|18
迎|welcome|げい|むかえる|7
送|send|そう|おくる|9
同|same|どう|おなじ|6
僚|colleague|りょう|—|14
直|fix; straight|ちょく|なおす|8
自|self|じ|みずから|6
親|parent; close|しん|おや|16
頼|rely on|らい|たのむ|16
地|ground; locality|ち・じ|—|6
感|feeling|かん|—|13`,`謝|thank; apologize|しゃ|あやまる|17
礼|courtesy; thanks|れい|—|5
遠|far|えん|とおい|13
慮|consider|りょ|—|15
互|mutual|ご|たがい|4
都|capital; all|と・つ|みやこ|11
合|fit; meet|ごう|あう|6
急|hurry|きゅう|いそぐ|9
遅|late|ち|おくれる|12
集|gather|しゅう|あつまる|12
計|measure; plan|けい|はかる|9
定|decide|てい|さだめる|8
発|depart|はつ|—|9
用|use|よう|もちいる|5
決|decide|けつ|きめる|7
留|remain|りゅう|とめる|10`,`将|future; commander|しょう|—|10
止|stop|し|とまる|4
変|change|へん|かわる|9
更|renew|こう|さら|7
程|extent; schedule|てい|ほど|12
議|discuss|ぎ|—|20
場|place|じょう|ば|12
告|inform|こく|つげる|7
再|again|さい|ふたたび|6
表|table; surface|ひょう|おもて|8
招|invite|しょう|まねく|8
択|choose|たく|—|7
考|consider|こう|かんがえる|6
交|cross; interact|こう|まじわる|6
差|difference|さ|さす|10
点|point|てん|—|9`,`曲|bend; tune|きょく|まがる|6
信|trust; message|しん|—|9
号|number; signal|ごう|—|5
換|exchange|かん|かえる|12
橋|bridge|きょう|はし|16
順|order|じゅん|—|12
動|move|どう|うごく|11
温|warm|おん|あたたかい|12
泉|spring|せん|いずみ|9
観|observe|かん|—|18
光|light|こう|ひかり|6
込|be crowded; enter|—|こむ|5
通|pass through|つう|とおる|10
運|carry; transport|うん|はこぶ|12
距|distance|きょ|—|12
離|separate|り|はなれる|19`,`反|opposite|はん|そる|4
対|oppose; pair|たい|—|7
往|go toward|おう|—|8
復|return; restore|ふく|—|12
片|one side|へん|かた|4
途|way; route|と|—|10
開|open|かい|あく・ひらく|12
閉|close|へい|しまる|11
消|extinguish|しょう|きえる|10
落|fall|らく|おちる|12
壊|break|かい|こわれる|16
掛|hang|かい|かける|11
確|certain|かく|たしか|15
認|recognize|にん|みとめる|14
注|pour; attention|ちゅう|そそぐ|8
整|arrange|せい|ととのえる|16`,`職|occupation|しょく|—|18
類|kind; category|るい|—|18
責|responsibility|せき|せめる|11
任|entrust|にん|まかせる|6
降|fall; descend|こう|ふる|10
報|report|ほう|しらせる|12
様|manner; honorific|よう|さま|14
伝|convey|でん|つたえる|6
守|protect|しゅ|まもる|6
配|distribute; worry|はい|くばる|10
心|heart; mind|しん|こころ|4
事|matter|じ|こと|8
例|example|れい|たとえる|8
健|healthy|けん|すこやか|11
康|health|こう|—|11
薬|medicine|やく|くすり|16`,`治|govern; heal|じ|なおる|8
栄|prosper|えい|さかえる|9
養|nourish|よう|やしなう|15
眠|sleep|みん|ねむる|10
憩|rest|けい|いこう|16
痛|pain|つう|いたい|12
熱|heat|ねつ|あつい|15
医|medicine|い|—|7
保|protect|ほ|たもつ|9
険|steep; risk|けん|けわしい|11
祭|festival|さい|まつり|11
客|guest|きゃく|—|9
盗|steal|とう|ぬすむ|11
財|wealth|ざい|—|10
布|cloth|ふ|ぬの|5
係|relation; person in charge|けい|かかり|9
並|line up|へい|ならぶ|8
訪|visit|ほう|たずねる|11
敬|respect|けい|うやまう|12
社|company; shrine|しゃ|やしろ|7
長|long; leader|ちょう|ながい|8
部|section|ぶ|—|11`],y=w.flatMap((o,i)=>o.split(`
`).map((a,s)=>{const[l,h,c,r,d]=a.split("|");return{id:`kanji-${l}`,level:"N4",jp:l,meaning:h,on:c,kun:r,reading:r==="—"?c.split("・")[0]:r.split("・")[0],strokes:Number(d),area:u[i].id,lesson:s}}));for(const o of y){const i=b.find(a=>a.jp.includes(o.jp));i&&(o.area=i.area)}const m={引っ越し:["relocation","moving","move house"],アパート:["flat","rental apartment"],住所:["postal address","home address"],家賃:["rent"],手伝う:["help","assist"],見える:["visible","can see"],聞こえる:["audible","can hear"],間に合う:["be on time","make it on time"],曲がる:["turn a corner"],教える:["teach","tell","explain"],資料:["materials","documents"],料理:["food","dish","cuisine","cooking"],薬:["medication","medicine"],祭り:["festival","local festival"]};b.forEach(o=>{m[o.jp]&&(o.aliases=m[o.jp])});export{b as a,y as b,k as c,u as n};
