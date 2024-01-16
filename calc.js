let url_array = location.href.split('/')
let file_name = url_array[url_array.length - 1]

const LG = file_name == 'ja.html' ? 'ja' : file_name == 'en.html' ? 'en' : 'zh-CN'

let TEXT = {
    'drink': {
        'zh-CN': '饮品',
        'ja': '飲み物',
        'en': 'Drinks',
    },
    'food': {
        'zh-CN': '食品',
        'ja': '食べ物',
        'en': 'Food',
    },
    'toy': {
        'zh-CN': '纪念品',
        'ja': '記念品',
        'en': 'Souvenirs',
    },
    'snowsant': {
        'zh-CN': '雪雉',
        'ja': 'スノーズント',
        'en': 'Snowsant',
    },
    'opponent': {
        'zh-CN': '对手',
        'ja': '相手',
        'en': 'Opponent',
    },
    'total': {
        'zh-CN': '总量',
        'ja': '総量',
        'en': 'total',
    },
    'settings': {
        'zh-CN': '设置',
        'ja': '設定',
        'en': 'Settings',
    },
    'save_settings': {
        'zh-CN': '保存设置',
        'ja': '設定を保存する',
        'en': 'Save settings',
    },
    'result_here': {
        'zh-CN': '这里显示计算结果',
        'ja': '計算結果はここに表示される',
        'en': 'The result will be here',
    },
    'all_strat_needed': {
        'zh-CN': '必须填写完所有对手策略',
        'ja': 'すべての相手のすべての策略を入力してください',
        'en': 'You have to enter all strategies of all opponents',
    },
    'illegal_data': {
        'zh-CN': '数据异常，请检查定价是否填写错误',
        'ja': 'データ異常、入力した価格をチェックしてください',
        'en': 'Illegal data found, please check the entered price',
    },
    'check_ok': {
        'zh-CN': '确认无误，开始计算！',
        'ja': '間違いなし、計算開始！',
        'en': 'All correct, calculation start!',
    },
    'calculation_start': {
        'zh-CN': '开始计算',
        'ja': '計算開始',
        'en': 'Calculation start',
    },
    'calculate_purchase_quantity_and_check': {
        'zh-CN': '计算进货数量并比对',
        'ja': '購入数量を計算&確認',
        'en': 'Calculate and confirm the purchase quantity',
    },
    'purchase_quantity_calculated': {
        'zh-CN': '进货数量计算完毕，请比对是否与游戏中显示一致，然后可以开始计算。',
        'ja': '購入数量計算完了、ゲーム内の表示と一致しているか確認してから計算開始してください。',
        'en': 'The purchase quantity has been calculated. Please check whether it is consistent with the display in the game, and then start the calculation.',
    },
    'purchase_strategy_calculated': {
        'zh-CN': '进货策略计算完毕，请按提示进货<span>（注意<b>不要手滑</b>点掉进货结果界面，总之先<b>截个图</b>吧）</span>，然后补全其他对手的进货策略，再计算进货数量并比对',
        'ja': '購入策略計算完了、結果通りに購入してください。（購入結果の画面は<b>再表示できない</b>ので，とりあえず<b>スクリーンショット</b>しよう）他の相手の購入策略も入力し、購入数量を計算して確認してください',
        'en': 'The purchase strategy has been calculated. (The purchase result screen <b>cannot be displayed again</b>, so let\'s <b>take a screenshot</b> for now.) Please also enter other opponents\' purchase strategies and calculate and confirm the purchase quantity.',
    },
    'set_drink_price': {
        'zh-CN': '请给饮品定价并售卖，然后点击“开始计算”进入下一步',
        'ja': '飲み物に値段を付けて販売して、“計算開始”をクリックしてください',
        'en': 'Please price the drinks and sell them, then click "Calculation start"',
    },
    'set_food_price': {
        'zh-CN': '请给食品定价并售卖，然后点击“开始计算”进入下一步',
        'ja': '食べ物に値段を付けて販売、“計算開始”をクリックしてください',
        'en': 'Please price the food and sell them, then click "Calculation start"',
    },
    'ask_drink_price': {
        'zh-CN': '请打探一次饮品售价并在输入框中输入，然后点击“开始计算”',
        'ja': '飲み物の価格を一回問い合わせて入力して、“計算開始”をクリックしてください',
        'en': 'Please ask the price of the drinks for one time and enter it, then click "Calculation start"',
    },
    'ask_drink_price_2': {
        'zh-CN': '请<span><b>再</b></span>打探一次饮品售价并在输入框中输入，然后点击“开始计算”',
        'ja': '飲み物の価格を<span><b>もう一回</b></span>問い合わせて入力して、“計算開始”をクリックしてください',
        'en': 'Please ask the price of the drinks for </b></span>one more time</b></span> and enter it, then click "Calculation start"',
    },
    'ask_food_price': {
        'zh-CN': '请打探一次食品售价并在输入框中输入，然后点击“开始计算”',
        'ja': '食べ物の価格を一回問い合わせて入力して、“計算開始”をクリックしてください',
        'en': 'Please ask the price of the food for one time and enter it, then click "Calculation start"',
    },
    'ask_food_price_2': {
        'zh-CN': '请<span><b>再</b></span>打探一次食品售价并在输入框中输入，然后点击“开始计算”',
        'ja': '食べ物の価格を<span><b>もう一回</b></span>問い合わせて入力して、“計算開始”をクリックしてください',
        'en': 'Please ask the price of the food for </b></span>one more time</b></span> and enter it, then click "Calculation start"',
    },
    'ask_toy_price': {
        'zh-CN': '请打探一次纪念品售价并在输入框中输入，然后点击“开始计算”',
        'ja': '記念品の価格を一回問い合わせて入力して、“計算開始”をクリックしてください',
        'en': 'Please ask the price of the souvenirs for one time and enter it, then click "Calculation start"',
    },
    'ask_price_result': {
        'zh-CN': '打探 __ASK_DRINK__ 次饮品进货，打探 __ASK_FOOD__ 次食品进货，打探 __ASK_TOY__ 次纪念品进货，然后输入打探结果并再次点击此按钮',
        'ja': '飲み物 __ASK_DRINK__ 回、食べ物 __ASK_FOOD__ 回、記念品 __ASK_TOY__ 回を問い合わせて、結果を入力して、もう一度ボタンをクリックしてください',
        'en': 'Please ask __ASK_DRINK__ time(s) for drinks, __ASK_FOOD__ time(s) for food and __ASK_TOY__ time(s) for souvenirs, input the asking result, and then click the button once more',
    },
    'set_price': {
        'zh-CN': '定价',
        'ja': '定価',
        'en': 'Set price',
    },
    'estimated_revenue_is': {
        'zh-CN': '预计收益为',
        'ja': '推定収益は',
        'en': 'the estimated revenue is',
    },
    'purchasing_stage_summary': {
        'zh-CN': '进货阶段总结',
        'ja': '購入ステージの概要',
        'en': 'Purchasing stage summary',
    },
    'toy_dumping_ok': {
        'zh-CN': '若有积压纪念品，可以适当减价10抛售',
        'ja': '記念品が余っている場合は、適当に10の割引で販売できます',
        'en': 'If you have a backlog of souvenirs, you can sell them off at a discount of 10',
    },
    'calculation_completed': {
        'zh-CN': '计算完成！享受你的收益吧！',
        'ja': '計算完了！利益を楽しみましょう！',
        'en': 'Calculation completed! Enjoy your revenue~',
    },
    'no_cost_calculation': {
        'zh-CN': '（没有计算成本）',
        'ja': '（コスト計算なし）',
        'en': '(no cost calculation)',
    },
}

let strattoint = {
    "激进": 2,
    "稳健": 1,
    "保守": 0,
    "": -1,
    3: "",
    2: "激进",
    1: "稳健",
    0: "保守",
}
let last_toggle = 0;
let drink_buyin = [20, 28, 38]
let food_buyin = [10, 20, 32]
let toy_buyin = [50, 100, 200]

let N = 0
let C = 0

function get_text(text_name) {
    return TEXT[text_name][LG]
}

function sum(array) {
    return array.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)
}

function rank(price_list, index) {
    let ret = 1
    for (let i = 0; i < price_list.length; i++) {
        if (price_list[i] < price_list[index]) {
            ret += 1
        }
    }
    return ret
}

function percentages(price_list) {
    let ranks = [0, 0, 0]
    for (let i = 0; i < 3; i++) {
        ranks[i] = rank(price_list, i)
    }
    if (ranks.includes(2) && ranks.includes(3)) {
        for (let i = 0; i < 3; i++) {
            ranks[i] = (5 - ranks[i]) / 9
        }
    }
    else if (ranks.includes(2) || ranks.includes(3)) {
        for (let i = 0; i < 3; i++) {
            ranks[i] = (5 - ranks[i]) / 10
        }
    }
    else {
        for (let i = 0; i < 3; i++) {
            ranks[i] = 1 / 3
        }
    }
    return ranks
}

function set_price(min_price, max_price, stocks, prices, bonus=[5000, 2000, 1000], print_result=0) {
    N++
    // if (N % 1000 == 0) console.log(N)
    if (prices[0] > 0) {
        // 已知全部价格，进行销量计算
        let market_percentage = percentages(prices)
        let sell_count = [0, 0, 0]
        let income = [0, 0, 0]
        let total_stock = sum(stocks)
        for (let i = 0; i < 3; i++) {
            sell_count[i] = Math.min(stocks[i], total_stock * market_percentage[i])
            income[i] = sell_count[i] * prices[i]
        }
        if (income[0] >= income[1] && income[0] >= income[2]) {
            income[0] += bonus[0]
        }
        else if (income[0] >= income[1] || income[0] >= income[2]) {
            income[0] += bonus[1]
        }
        else {
            income[0] += bonus[2]
        }
        if (print_result) {
            console.log(prices, sell_count, income[0])
        }
        return income[0]
    }
    else if (prices[1] > 0 && prices[2] > 0) {
        // 已知两个对手的定价，计算我方最佳定价
        let best_price = -1
        let best_benefit = -1
        let total_stock = sum(stocks)
        for (let price = min_price; price < 1 + max_price; price++) {
            let actual_prices = prices.slice()
            actual_prices[0] = price
            let actual_income = set_price(min_price, max_price, stocks, actual_prices, bonus=bonus)
            if (actual_income >= best_benefit) {
                best_benefit = actual_income
                best_price = price
            }
        }
        return [
            best_price,
            best_benefit,
            0,
            0
        ]
    }
    else if (sum(prices) > 0) {
        // 仅已知一个对手定价，计算我方期望最佳定价和进一步探测收益
        let missing_place
        if (prices[1] > 0) {
            missing_place = 2
        }
        else {
            missing_place = 1
        }
        let max_income = 0
        let best_price = 0
        for (let my_price = min_price; my_price < 1 + max_price; my_price++) {
            let sum_income = 0
            for (let opponent_price = min_price; opponent_price < 1 + sum(prices); opponent_price++) {
                let actual_prices = prices.slice()
                actual_prices[0] = my_price
                actual_prices[missing_place] = opponent_price
                let got_income = set_price(min_price, max_price, stocks, actual_prices, bonus=bonus)
                // 两个对手定价相同的概率是定价不同的概率的一半，因为定价不同的话有BA和AB两种情况，定价相同只有BB一种
                if (opponent_price != sum(prices)) {
                    sum_income += got_income
                }
                else {
                    sum_income += got_income / 2
                }
            }
            if (sum_income >= max_income) {
                max_income = sum_income
                best_price = my_price
            }
        }

        let sum_income_while_detected = 0
        for (let opponent_price = min_price; opponent_price < 1 + sum(prices); opponent_price++) {
            let actual_prices = prices.slice()
            actual_prices[missing_place] = opponent_price
            let this_income = set_price(min_price, max_price, stocks, actual_prices)
            if (opponent_price != sum(prices)) {
                sum_income_while_detected += this_income[1]
            }
            else {
                sum_income_while_detected += this_income[1] / 2
            }
        }
        // 因此总情况数量也要减去半个
        let average_income_while_detected = sum_income_while_detected / (sum(prices) + 1 - min_price - 0.5)
        let average_income_not_detected = max_income / (sum(prices) + 1 - min_price - 0.5)

        return [
            best_price,
            average_income_not_detected,
            average_income_while_detected - average_income_not_detected,
            0
        ]
    }
    else {
        // 对手定价完全未知，计算盲开最佳定价以及探测收益
        let total_income = 0
        let second_detect_benefit = 0
        let first_detect_benefit = 0
        let result1 = [], result2 = []
        for (let i = 0; i < 2 + max_price - min_price; i++) {
            result1.push(0)
            result2.push(0)
        }
        for (let price1 = min_price; price1 < 1 + max_price; price1++) {
            let detected_price = [0, price1, 0]
            result1[price1 - min_price] = set_price(min_price, max_price, stocks, detected_price, bonus=bonus)
        }
        for (let price2 = min_price; price2 < 1 + max_price; price2++) {
            let detected_price = [0, 0, price2]
            result2[price2 - min_price] = set_price(min_price, max_price, stocks, detected_price, bonus=bonus)
        }
        for (let price1 = min_price; price1 < 1 + max_price; price1++) {
            for (let price2 = min_price; price2 < 1 + max_price; price2++) {
                if (price1 > price2) {
                    second_detect_benefit += result1[price1 - min_price][2]
                    first_detect_benefit += result1[price1 - min_price][1]
                }
                else if (price2 > price1) {
                    second_detect_benefit += result2[price2 - min_price][2]
                    first_detect_benefit += result2[price2 - min_price][1]
                }
                else {
                    second_detect_benefit += (result1[price1 - min_price][2] + result2[price2 - min_price][2]) / 2
                    first_detect_benefit += (result1[price1 - min_price][1] + result2[price2 - min_price][1]) / 2
                }
            }
        }

        first_detect_benefit /= (max_price - min_price + 1) * (max_price - min_price + 1)
        let best_price = 0
        let max_benefit = 0
        for (let price0 = min_price; price0 < 1 + max_price; price0++) {
            let benefit = 0
            for (let price1 = min_price; price1 < 1 + max_price; price1++) {
                for (let price2 = min_price; price2 < 1 + max_price; price2++) {
                    benefit += set_price(min_price, max_price, stocks, [price0, price1, price2], bonus=bonus)
                }
            }
            if (benefit > max_benefit) {
                max_benefit = benefit
                best_price = price0
            }
        }

        return [
            best_price,
            max_benefit / ((max_price - min_price + 1) ** 2),
            Math.round(first_detect_benefit - max_benefit / ((max_price - min_price + 1) ** 2), 6),
            second_detect_benefit / ((max_price - min_price) ** 2)
        ]
    }
}

function safe_int(s) {
    if (Array.isArray(s)){
        let ret = [];
        for (let i = 0; i < s.length; i) {
            ret.push(parseInt(s) || 0);
        }
        return ret;
    }
    return parseInt(s) || 0;
}

function toy_benefit(min_price, max_price, stocks) {
    let orig_win, best_win, n
    if (stocks[0] == stocks[1]) {
        orig_win = stocks[0] * min_price
        best_win = 0
        n = 0
        for (let price2 = min_price; price2 < max_price + 10; price2 += 10) {
            n += 1
            best_win += stocks[0] * price2
        }
        best_win /= n
        return [best_win, orig_win]
    }
    else {
        orig_win = 0
        best_win = 0
        n = 0
        for (let price2 = min_price; price2 < max_price + 10; price2 += 10) {
            n += 1
            if (price2 != min_price) {
                orig_win += stocks[0] * min_price
                best_win += stocks[0] * (price2 - 10)
            }
            else {
                orig_win += (stocks[0] + stocks[1]) / 2 * min_price
                best_win += (stocks[0] + stocks[1]) / 2 * min_price
            }
        }
        best_win /= n
        orig_win /= n
        return [best_win, orig_win]
    }
}

function best_strategy(s, t) {
    let ret = []
    for (let i = 0; i < s.length; i++) {
        ret.push(0)
    }
    if (t <= 0) {
        return [ret, 0]
    }
    let max = -99999
    for (let i = 0; i < s.length; i++) {
        let s2 = []
        for (let j = 0; j < s.length; j++) {
            s2.push(s[j].slice())
        }
        if (s2[i].length > 0) {
            let temp = s2[i][0]
            s2[i] = s2[i].slice(1)
            let new_strat = best_strategy(s2.slice(), t - 1)
            if (new_strat[1] + temp > max) {
                max = new_strat[1] + temp
                ret = new_strat[0]
                ret[i] += 1
            }
        }
    }
    return [ret, max]
}

function calculate() {
    console.log('calculate()')
    reset_td_class()
    let detect_time = safe_int(document.getElementById('detect').value)
    let minus, result
    let txt, txt_big = ''
    if (
        safe_int(document.getElementById('drink_fw_0').value) < 1 ||
        safe_int(document.getElementById('drink_fw_1').value) < 1 ||
        safe_int(document.getElementById('drink_fw_0').value) > safe_int(document.getElementById('drink_fw_1').value) ||
        safe_int(document.getElementById('food_fw_0').value) < 1 ||
        safe_int(document.getElementById('food_fw_1').value) < 1 ||
        safe_int(document.getElementById('food_fw_0').value) > safe_int(document.getElementById('food_fw_1').value) ||
        safe_int(document.getElementById('toy_fw_0').value) < 1 ||
        safe_int(document.getElementById('toy_fw_1').value) < 1 ||
        safe_int(document.getElementById('toy_fw_0').value) > safe_int(document.getElementById('toy_fw_1').value)
    ) {
        document.getElementById('L8').innerHTML = get_text('illegal_data')
        return
    }
    minus = -1
    if (detect_time <= 0) {
        if (!document.getElementById('td_1_7').innerHTML) {
            let best = set_price(
                min_price=safe_int(document.getElementById('drink_fw_0').value),
                max_price=safe_int(document.getElementById('drink_fw_1').value),
                stocks=[safe_int(document.getElementById('drink_stock_0').innerHTML), safe_int(document.getElementById('drink_stock_1').innerHTML), safe_int(document.getElementById('drink_stock_2').innerHTML)],
                prices=[0, safe_int(document.getElementById('drink_dt_0').value), safe_int(document.getElementById('drink_dt_1').value)],
                bonus=[safe_int(document.getElementById('bonus_1').value), safe_int(document.getElementById('bonus_2').value), safe_int(document.getElementById('bonus_3').value)],
            )
            txt = `${get_text('set_price')}${best[0]}，${get_text('estimated_revenue_is')}${best[1]}`
            document.getElementById('td_1_7').innerHTML = txt
            document.getElementById(`td_1_7`).classList.add('current_step')
            document.getElementById(`td_4_3`).classList.add('current_step')
        }
        if (!document.getElementById('td_2_7').innerHTML) {
            let best = set_price(
                min_price=safe_int(document.getElementById('food_fw_0').value),
                max_price=safe_int(document.getElementById('food_fw_1').value),
                stocks=[safe_int(document.getElementById('food_stock_0').innerHTML), safe_int(document.getElementById('food_stock_1').innerHTML), safe_int(document.getElementById('food_stock_2').innerHTML)],
                prices=[0, safe_int(document.getElementById('food_dt_0').value), safe_int(document.getElementById('food_dt_1').value)],
                bonus=[safe_int(document.getElementById('bonus_1').value), safe_int(document.getElementById('bonus_2').value), safe_int(document.getElementById('bonus_3').value)],
            )
            txt = `${get_text('set_price')}${best[0]}，${get_text('estimated_revenue_is')}${best[1]}`
            document.getElementById('td_2_7').innerHTML= txt
            document.getElementById(`td_2_7`).classList.add('current_step')
        }
        if (!document.getElementById('td_3_7').innerHTML) {
            let min_price = safe_int(document.getElementById('toy_fw_0').value)
            let max_price = safe_int(document.getElementById('toy_fw_1').value)
            let stocks = [safe_int(document.getElementById('toy_stock_0').innerHTML), safe_int(document.getElementById('toy_stock_1').innerHTML)]
            let bonus = [safe_int(document.getElementById('bonus_1').value), safe_int(document.getElementById('bonus_2').value), safe_int(document.getElementById('bonus_3').value)]
            let price = safe_int(document.getElementById('toy_dt_0').value)
            if (price < min_price) {
                result = toy_benefit(min_price, max_price, stocks)[1]
                p = min_price
            }
            else {
                if (price == min_price) {
                    result = (stocks[0] + stocks[1]) / 2 * min_price
                    p = min_price
                }
                else {
                    if (stocks[0] > stocks[1]) {
                        result = stocks[0] * (price - 10)
                        p = price - 10
                    }
                    else {
                        result = stocks[0] * price
                        p = price
                    }
                }
            }

            result += bonus[0]
            txt = `${get_text('set_price')}${p}，${get_text('estimated_revenue_is')}${result}<br>${get_text('toy_dumping_ok')}`
            let best_drink = set_price(
                min_price=safe_int(document.getElementById('drink_fw_0').value),
                max_price=safe_int(document.getElementById('drink_fw_1').value),
                stocks=[safe_int(document.getElementById('drink_stock_0').innerHTML), safe_int(document.getElementById('drink_stock_1').innerHTML),
                        safe_int(document.getElementById('drink_stock_2').innerHTML)],
                prices=[0, safe_int(document.getElementById('drink_dt_0').value), safe_int(document.getElementById('drink_dt_1').value)],
                bonus=[safe_int(document.getElementById('bonus_1').value), safe_int(document.getElementById('bonus_2').value), safe_int(document.getElementById('bonus_3').value)],
            )
            let best_food = set_price(
                min_price=safe_int(document.getElementById('food_fw_0').value),
                max_price=safe_int(document.getElementById('food_fw_1').value),
                stocks=[safe_int(document.getElementById('food_stock_0').innerHTML), safe_int(document.getElementById('food_stock_1').innerHTML), safe_int(document.getElementById('food_stock_2').innerHTML)],
                prices=[0, safe_int(document.getElementById('food_dt_0').value), safe_int(document.getElementById('food_dt_1').value)],
                bonus=[safe_int(document.getElementById('bonus_1').value), safe_int(document.getElementById('bonus_2').value), safe_int(document.getElementById('bonus_3').value)],
            )
            let cost = 0
            if (document.getElementById('drink_strat_0').value > -1 && document.getElementById('food_strat_0').value > -1 && document.getElementById('toy_strat_0').value > -1) {
                st_drink = document.getElementById('drink_strat_0').value
                st_food = document.getElementById('food_strat_0').value
                st_toy = document.getElementById('toy_strat_0').value
                if (st_drink >= 0 && st_food >= 0 && st_toy >= 0) {
                    cost += safe_int(drink_buyin[st_drink]) * safe_int(safe_int(document.getElementById('drink_stock_0').innerHTML))
                    cost += safe_int(food_buyin[st_food]) * safe_int(safe_int(document.getElementById('food_stock_0').innerHTML))
                    cost += safe_int(toy_buyin[st_toy]) * safe_int(safe_int(document.getElementById('toy_stock_0').innerHTML))
                }
            }
            txt_big = `${get_text('calculation_completed')}${get_text('estimated_revenue_is')}${best_food[1] + best_drink[1] + result - cost}`
            document.getElementById('td_4_3').innerHTML = ''
            document.getElementById(`L8`).classList.add('current_step')
            if (cost < 1) {
                txt_big += get_text('no_cost_calculation')
            }
            document.getElementById('td_3_7').innerHTML = txt
            document.getElementById(`td_3_7`).classList.add('current_step')
        }
    }
    else {
        if (!document.getElementById('td_1_7').innerHTML) {
            let best_drink = set_price(
                min_price=safe_int(document.getElementById('drink_fw_0').value),
                max_price=safe_int(document.getElementById('drink_fw_1').value),
                stocks=[safe_int(document.getElementById('drink_stock_0').innerHTML), safe_int(document.getElementById('drink_stock_1').innerHTML),
                        safe_int(document.getElementById('drink_stock_2').innerHTML)],
                prices=[0, safe_int(document.getElementById('drink_dt_0').value), safe_int(document.getElementById('drink_dt_1').value)],
                bonus=[safe_int(document.getElementById('bonus_1').value), safe_int(document.getElementById('bonus_2').value), safe_int(document.getElementById('bonus_3').value)],
            )
            let best_food = set_price(
                min_price=safe_int(document.getElementById('food_fw_0').value),
                max_price=safe_int(document.getElementById('food_fw_1').value),
                stocks=[safe_int(document.getElementById('food_stock_0').innerHTML), safe_int(document.getElementById('food_stock_1').innerHTML), safe_int(document.getElementById('food_stock_2').innerHTML)],
                prices=[0, safe_int(document.getElementById('food_dt_0').value), safe_int(document.getElementById('food_dt_1').value)],
                bonus=[safe_int(document.getElementById('bonus_1').value), safe_int(document.getElementById('bonus_2').value), safe_int(document.getElementById('bonus_3').value)],
            )
            if (best_drink.length < 3 || best_drink[2] + best_drink[3] <= 0.01) {
                txt_big = get_text('set_drink_price')
                txt = `${get_text('set_price')}${best_drink[0]}，${get_text('estimated_revenue_is')}${best_drink[1]}`
                document.getElementById('td_1_7').innerHTML = txt
                document.getElementById(`td_1_7`).classList.add('current_step')
                document.getElementById(`td_4_3`).classList.add('current_step')
                minus = 0
            }
            else {
                let next_step_gain = best_drink.slice(2)
                let food_gain = best_food.slice(2)
                let toy_ = toy_benefit(
                    safe_int(document.getElementById('toy_fw_0').value),
                    safe_int(document.getElementById('toy_fw_1').value),
                    [safe_int(document.getElementById('toy_stock_0').innerHTML), safe_int(document.getElementById('toy_stock_1').innerHTML)]
                )
                let toy_gain = [toy_[0] - toy_[1]]
                for (let q = 0; q < detect_time; q++) {
                    next_step_gain.push(0)
                    food_gain.push(0)
                    toy_gain.push(0)
                }
                let best_strat = best_strategy([next_step_gain, food_gain, toy_gain], detect_time)
                // console.log(best_strat)
                if (best_strat[0][0] > 0) {
                    if (safe_int(document.getElementById('drink_dt_0').value) == 0 && safe_int(document.getElementById('drink_dt_1').value) == 0) {
                        txt_big = get_text('ask_drink_price')
                    }
                    else {
                        txt_big = get_text('ask_drink_price_2')
                    }
                    document.getElementById(`td_1_5`).classList.add('current_step')
                    document.getElementById(`td_1_6`).classList.add('current_step')
                    document.getElementById(`td_4_3`).classList.add('current_step')
                }
                else {
                    txt_big = get_text('set_drink_price')
                    txt = `${get_text('set_price')}${best_drink[0]}，${get_text('estimated_revenue_is')}${best_drink[1]}`
                    document.getElementById('td_1_7').innerHTML = txt
                    document.getElementById(`td_1_7`).classList.add('current_step')
                    document.getElementById(`td_4_3`).classList.add('current_step')
                    minus = 0
                }
            }
        }
        else if (!document.getElementById('td_2_7').innerHTML) {
            let best_food = set_price(
                min_price=safe_int(document.getElementById('food_fw_0').value),
                max_price=safe_int(document.getElementById('food_fw_1').value),
                stocks=[safe_int(document.getElementById('food_stock_0').innerHTML), safe_int(document.getElementById('food_stock_1').innerHTML), safe_int(document.getElementById('food_stock_2').innerHTML)],
                prices=[0, safe_int(document.getElementById('food_dt_0').value), safe_int(document.getElementById('food_dt_1').value)],
                bonus=[safe_int(document.getElementById('bonus_1').value), safe_int(document.getElementById('bonus_2').value), safe_int(document.getElementById('bonus_3').value)],
            )
            if (best_food.length < 3 || best_food[2] + best_food[3] <= 0.01) {
                txt_big = get_text('set_food_price')
                txt = `${get_text('set_price')}${best_food[0]}，${get_text('estimated_revenue_is')}${best_food[1]}`
                document.getElementById('td_2_7').innerHTML = txt
                document.getElementById(`td_2_7`).classList.add('current_step')
                document.getElementById(`td_4_3`).classList.add('current_step')
                minus = 0
            }
            else {
                let next_step_gain = best_food.slice(2)
                let toy_ = toy_benefit(
                    safe_int(document.getElementById('toy_fw_0').value),
                    safe_int(document.getElementById('toy_fw_1').value),
                    [safe_int(document.getElementById('toy_stock_0').innerHTML), safe_int(document.getElementById('toy_stock_1').innerHTML)]
                )
                let toy_gain = [toy_[0] - toy_[1]]
                for (let q = 0; q < detect_time; q++) {
                    next_step_gain.push(0)
                    toy_gain.push(0)
                }
                let best_strat = best_strategy([next_step_gain, toy_gain], detect_time)
                if (best_strat[0][0] > 0) {
                    if (safe_int(document.getElementById('food_dt_0').value) == 0 && safe_int(document.getElementById('food_dt_1').value) == 0) {
                        txt_big = get_text('ask_food_price')
                        document.getElementById(`td_2_5`).classList.add('current_step')
                        document.getElementById(`td_2_6`).classList.add('current_step')
                        document.getElementById(`td_4_3`).classList.add('current_step')
                    }
                    else {
                        txt_big = get_text('ask_food_price_2')
                        document.getElementById(`td_2_5`).classList.add('current_step')
                        document.getElementById(`td_2_6`).classList.add('current_step')
                        document.getElementById(`td_4_3`).classList.add('current_step')
                    }
                }
                else {
                    txt_big = get_text('ask_food_price')
                    txt = `${get_text('set_price')}${best_food[0]}，${get_text('estimated_revenue_is')}${best_food[1]}`
                    document.getElementById('td_2_7').innerHTML = txt
                    document.getElementById(`td_2_7`).classList.add('current_step')
                    document.getElementById(`td_4_3`).classList.add('current_step')
                    minus = 0
                }
            }
        }
        else if (!document.getElementById('td_3_7').innerHTML) {
            txt_big = get_text('ask_toy_price')
            document.getElementById(`td_3_5`).classList.add('current_step')
            document.getElementById(`td_3_6`).classList.add('current_step')
            document.getElementById(`td_4_3`).classList.add('current_step')
            minus = -detect_time
        }
    }
    document.getElementById('detect').value = Math.max(0, parseInt(detect_time) + parseInt(minus))
    document.getElementById('L8').innerHTML = txt_big
}

function choose_strat(inprice=[30, 42, 57], stock=360, strat=[0, 0, 0], outprice=[95, 105], detects=0) {
    C++
    // console.log('choose_strat', C)
    // console.log(inprice, stock, strat, outprice, detects)
    let max_earn = 0
    let best = -1
    let total_possib = 9
    let range1 = [0, 1, 2]
    let range2 = [0, 1, 2]
    if (strat[1] >= 0) {
        range1 = [strat[1]]
        total_possib /= 3
    }
    if (strat[2] >= 0) {
        range2 = [strat[2]]
        total_possib /= 3
    }
    let judge_active = false
    if (strat[1] < 0 && strat[2] < 0) {
        judge_active = true
    }
    let a = [
        [
            [0, 0, 0], [0, 0, 0], [0, 0, 0]
        ],
        [
            [0, 0, 0], [0, 0, 0], [0, 0, 0]
        ],
        [
            [0, 0, 0], [0, 0, 0], [0, 0, 0]
        ]
    ]
    for (let i = 0; i < 3; i++) {
        let total_earn = 0
        for (let ri1 = 0; ri1 < range1.length; ri1++) {
            let strat1 = range1[ri1]
            for (let ri2 = 0; ri2 < range2.length; ri2++) {
                let strat2 = range2[ri2]
                let total_earn_multiplier = 1
                if (judge_active && strat2 > strat1) {
                    continue
                }
                else if (judge_active && strat2 < strat1) {
                    total_earn_multiplier = 2
                }
                let pct = percentages([-i, -strat1, -strat2])
                let cost = pct[0] * stock * inprice[i]
                // console.log('i, strat1, strat2', i, strat1, strat2)
                let earn = set_price(
                    outprice[0], outprice[1],
                    [pct[0] * stock, pct[1] * stock, pct[2] * stock],
                    [0, 0, 0], [5000, 2000, 1000]
                )
                let total = [earn[1] - cost, earn[2], earn[3]]
                total_earn += sum(total.slice(0, 1 + detects))  * total_earn_multiplier
                a[i][strat1][strat2] = sum(total.slice(0, 1 + detects))
                if (judge_active && strat2 < strat1) {
                    a[i][strat2][strat1] = sum(total.slice(0, 1 + detects))
                }
            }
        }
        if (total_earn > max_earn) {
            max_earn = total_earn
            best = i
        }
    }
    let max_earn_not_detect = max_earn / total_possib
    // console.log('max_earn_not_detect, max_earn, total_possib', max_earn_not_detect, max_earn, total_possib)
    let avg_earn_2_detect = 0
    // console.log(strat)
    if (strat[1] < 0 || strat[2] < 0) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                let max_earn = 0
                for (let i = 0; i < 3; i++) {
                    if (a[i][j][k] > max_earn) {
                        max_earn = a[i][j][k]
                    }
                }
                // console.log('max_earn', max_earn)
                avg_earn_2_detect += max_earn / total_possib
            }
        }
        if (!(strat[1] < 0 && strat[2] < 0)) {
            // console.log('max_earn_not_detect, avg_earn_2_detect - max_earn_not_detect', max_earn_not_detect, avg_earn_2_detect - max_earn_not_detect)
            return [best, max_earn_not_detect, avg_earn_2_detect - max_earn_not_detect, 0]
        }
    }
    let avg_earn_1_detect = 0
    if (strat[1] < 0 && strat[2] < 0) {
        for (let j = 0; j < 3; j++) {
            let big = 0
            for (let i = 0; i < 3; i++) {
                let avg = 0
                for (let k = 0; k < 3; k++) {
                    avg += a[i][j][k]
                }
                if (avg > big) {
                    big = avg
                }
            }
            avg_earn_1_detect += big / total_possib
        }
        // console.log('avg_earn_1_detect, max_earn_not_detect, avg_earn_2_detect, avg_earn_1_detect', avg_earn_1_detect, max_earn_not_detect, avg_earn_2_detect, avg_earn_1_detect)
        // console.log('best, max_earn_not_detect, avg_earn_1_detect - max_earn_not_detect, avg_earn_2_detect - avg_earn_1_detect', best, max_earn_not_detect, avg_earn_1_detect - max_earn_not_detect, avg_earn_2_detect - avg_earn_1_detect)
        return [best, max_earn_not_detect, avg_earn_1_detect - max_earn_not_detect, avg_earn_2_detect - avg_earn_1_detect]
    }
    // console.log('best, max_earn_not_detect', best, max_earn_not_detect)
    return [best, max_earn_not_detect, 0, 0]
}

function cal_jinhuo() {
    // 饮品
    let strats, pct, total_goods;
    strats = [-1, -1, -1]
    strats[0] = document.getElementById('drink_strat_0').value
    strats[1] = document.getElementById('drink_strat_1').value
    strats[2] = document.getElementById('drink_strat_2').value
    for (let i = 0; i < 3; i++) {
        if (strats[i] == -1) {
            document.getElementById('L8').innerHTML = get_text('all_strat_needed')
            return
        }
    }
    pct = percentages([-strats[0], -strats[1], -strats[2]])
    total_goods = safe_int(document.getElementById('drink_total').value)
    for (let i = 0; i < 3; i++) {
        pct[i] = pct[i] * total_goods
        document.getElementById(`drink_stock_${i}`).innerHTML = pct[i]
    }
    // 食品
    strats = [-1, -1, -1]
    strats[0] = document.getElementById('food_strat_0').value
    strats[1] = document.getElementById('food_strat_1').value
    strats[2] = document.getElementById('food_strat_2').value
    for (let i = 0; i < 3; i++) {
        if (strats[i] == -1) {
            document.getElementById('L8').innerHTML = get_text('all_strat_needed')
            return
        }
    }
    pct = percentages([-strats[0], -strats[1], -strats[2]])
    total_goods = safe_int(document.getElementById('food_total').value)
    for (let i = 0; i < 3; i++) {
        pct[i] = pct[i] * total_goods
        document.getElementById(`food_stock_${i}`).innerHTML = pct[i]
    }
    // 纪念品
    strats = [-1, -1, -1]
    strats[0] = document.getElementById('toy_strat_0').value
    strats[1] = document.getElementById('toy_strat_1').value
    for (let i = 0; i < 2; i++) {
        if (strats[i] == -1) {
            document.getElementById('L8').innerHTML = get_text('all_strat_needed')
            return
        }
    }
    total_goods = safe_int(document.getElementById('toy_total').value)
    if (strats[1] < strats[0]) {
        document.getElementById(`toy_stock_0`).innerHTML = total_goods * 0.6
        document.getElementById(`toy_stock_1`).innerHTML = total_goods * 0.4
    }
    else if (strats[1] == strats[0]) {
        document.getElementById(`toy_stock_0`).innerHTML = total_goods * 0.5
        document.getElementById(`toy_stock_1`).innerHTML = total_goods * 0.5
    }
    else if (strats[1] > strats[0]) {
        document.getElementById(`toy_stock_1`).innerHTML = total_goods * 0.6
        document.getElementById(`toy_stock_0`).innerHTML = total_goods * 0.4
    }
    document.getElementById('td_4_3').innerHTML = `<div class="div_button" onclick="switch_table(); calculate();">${get_text('check_ok')}</div>`
    document.getElementById('L8').innerHTML = get_text('purchase_quantity_calculated')
    // 高亮
    reset_td_class()
    document.getElementById(`td_1_2`).classList.add('current_step')
    document.getElementById(`td_1_3`).classList.add('current_step')
    document.getElementById(`td_1_4`).classList.add('current_step')
    document.getElementById(`td_2_2`).classList.add('current_step')
    document.getElementById(`td_2_3`).classList.add('current_step')
    document.getElementById(`td_2_4`).classList.add('current_step')
    document.getElementById(`td_3_2`).classList.add('current_step')
    document.getElementById(`td_3_3`).classList.add('current_step')
    document.getElementById(`td_3_4`).classList.add('current_step')
    document.getElementById(`td_4_3`).classList.add('current_step')
    return
}

function determine_input_strategy(detects=0) {
    let strats_drink = [-1, -1, -1]
    strats_drink[0] = document.getElementById('drink_strat_0').value
    strats_drink[1] = document.getElementById('drink_strat_1').value
    strats_drink[2] = document.getElementById('drink_strat_2').value
    let strats_food = [-1, -1, -1]
    strats_food[0] = document.getElementById('food_strat_0').value
    strats_food[1] = document.getElementById('food_strat_1').value
    strats_food[2] = document.getElementById('food_strat_2').value
    let strats_toy = [-1, -1]
    strats_toy[0] = document.getElementById('toy_strat_0').value
    strats_toy[1] = document.getElementById('toy_strat_1').value
    // let detect_time = safe_int(document.getElementById('detect').value)
    let st1 = choose_strat(
        inprice=[safe_int(drink_buyin[0]), safe_int(drink_buyin[1]), safe_int(drink_buyin[2])],
        stock=safe_int(document.getElementById('drink_total').value),
        strat=strats_drink,
        outprice=[safe_int(document.getElementById('drink_fw_0').value), safe_int(document.getElementById('drink_fw_1').value)],
        detects=detects
    )[0]
    document.getElementById('drink_strat_0').value = st1
    let st2 = choose_strat(
        inprice=[safe_int(food_buyin[0]), safe_int(food_buyin[1]), safe_int(food_buyin[2])],
        stock=safe_int(document.getElementById('food_total').value),
        strat=strats_food,
        outprice=[safe_int(document.getElementById('food_fw_0').value), safe_int(document.getElementById('food_fw_1').value)],
        detects=detects
    )[0]
    document.getElementById('food_strat_0').value = st2
    if (strats_toy[1] == 0) {
        document.getElementById('toy_strat_0').value = 1
    }
    else {
        document.getElementById('toy_strat_0').value = 2
    }
    document.getElementById('L8').innerHTML = get_text('purchase_strategy_calculated')
    document.getElementById(`td_1_2`).classList.add('current_step')
    document.getElementById(`td_2_2`).classList.add('current_step')
    document.getElementById(`td_3_2`).classList.add('current_step')
    document.getElementById(`td_4_3`).classList.add('current_step')
    document.getElementById(`td_4_3`).innerHTML = `<div class="div_button" onclick="cal_jinhuo();">${get_text('calculate_purchase_quantity_and_check')}</div>`
    return
}

function first_phase_greedy() {
    // 高亮
    reset_td_class()
    // document.getElementById(`td_1_2`).classList.add('current_step')
    document.getElementById(`td_1_3`).classList.add('current_step')
    document.getElementById(`td_1_4`).classList.add('current_step')
    // document.getElementById(`td_2_2`).classList.add('current_step')
    document.getElementById(`td_2_3`).classList.add('current_step')
    document.getElementById(`td_2_4`).classList.add('current_step')
    // document.getElementById(`td_3_2`).classList.add('current_step')
    document.getElementById(`td_3_3`).classList.add('current_step')
    document.getElementById(`td_3_4`).classList.add('current_step')

    let strats_drink = [-1, -1, -1]
    strats_drink[0] = document.getElementById('drink_strat_0').value
    strats_drink[1] = document.getElementById('drink_strat_1').value
    strats_drink[2] = document.getElementById('drink_strat_2').value
    let strats_food = [-1, -1, -1]
    strats_food[0] = document.getElementById('food_strat_0').value
    strats_food[1] = document.getElementById('food_strat_1').value
    strats_food[2] = document.getElementById('food_strat_2').value
    let strats_toy = [-1, -1]
    strats_toy[0] = document.getElementById('toy_strat_0').value
    strats_toy[1] = document.getElementById('toy_strat_1').value
    let detect_time = safe_int(document.getElementById('detect').value)
    console.log('剩余打探次数', detect_time)
    if (detect_time <= 0) {
        determine_input_strategy(0)
        return
    }
    else if (strats_drink[1] >= 0 && strats_drink[2] >= 0 && strats_food[1] >= 0 && strats_food[2] >= 0 && strats_toy[1] >= 0) {
        determine_input_strategy(Math.min(2, Math.floor(detect_time / 2)))
        return
    }
    else if (strats_drink[1] >= 0 || strats_drink[2] >= 0 || strats_food[1] >= 0 || strats_food[2] >= 0 || strats_toy[1] >= 0) {
        determine_input_strategy(Math.min(2, Math.floor(detect_time / 2)))
        return
    }
    let max_earn = 0
    let best_strat = [-1, -1, -1]
    console.time('计算一阶段打探收益')
    let drink_buy_strat = choose_strat(
        inprice=[safe_int(drink_buyin[0]), safe_int(drink_buyin[1]), safe_int(drink_buyin[2])],
        stock=safe_int(document.getElementById('drink_total').value),
        strat=[-1, -1, -1],
        outprice=[safe_int(document.getElementById('drink_fw_0').value), safe_int(document.getElementById('drink_fw_1').value)],
        detects=1
    ).slice(2)
    // console.log('drink_buy_strat', drink_buy_strat)
    let food_buy_strat = choose_strat(
        inprice=[safe_int(food_buyin[0]), safe_int(food_buyin[1]), safe_int(food_buyin[2])],
        stock=safe_int(document.getElementById('food_total').value),
        strat=[-1, -1, -1],
        outprice=[safe_int(document.getElementById('food_fw_0').value), safe_int(document.getElementById('food_fw_1').value)],
        detects=1
        ).slice(2)
    // console.log('food_buy_strat', food_buy_strat)
    console.timeEnd('计算一阶段打探收益')
    console.time('计算二阶段打探收益')
    let toy_buy_strat = [20 * safe_int(document.getElementById('toy_total').value), 0]
    let p = [0, 0, 0, 0, 0, 0, 0, 0]
    p[1] = [3 / 27, [1 / 3, 1 / 3, 1 / 3]]
    p[2] = [2 / 27, [2 / 9, 3 / 9, 4 / 9]]
    p[4] = [2 / 27, [4 / 9, 3 / 9, 2 / 9]]
    p[3] = [2 / 27, [3 / 9, 4 / 9, 2 / 9]]
    p[0] = [3 / 27, [4 / 10, 3 / 10, 3 / 10]]
    p[5] = [6 / 27, [4 / 10, 4 / 10, 2 / 10]]
    p[6] = [3 / 27, [2 / 10, 4 / 10, 4 / 10]]
    p[7] = [6 / 27, [3 / 10, 3 / 10, 4 / 10]]
    let food_sell_strat = [0, 0]
    let drink_sell_strat = [0, 0]
    let toy_sell_strat = [0, 0]
    for (let i = 0; i < p.length; i++) {
        let stocks = [0, 0, 0]
        for (let j = 0; j < 3; j++) {
            stocks[j] = p[i][1][j] * safe_int(document.getElementById('drink_total').value)
        }
        let dss = set_price(
            min_price=safe_int(document.getElementById('drink_fw_0').value),
            max_price=safe_int(document.getElementById('drink_fw_1').value),
            stocks=stocks,
            prices=[0, 0, 0],
            bonus=[safe_int(document.getElementById('bonus_1').value), safe_int(document.getElementById('bonus_2').value), safe_int(document.getElementById('bonus_3').value)],
        )
        drink_sell_strat[0] += dss[2] * p[i][0]
        drink_sell_strat[1] += dss[3] * p[i][0]
        // console.log('i, p[i], drink_sell_strat', i, p[i], drink_sell_strat)

        for (let j = 0; j < 3; j++) {
            stocks[j] = p[i][1][j] * safe_int(document.getElementById('food_total').value)
        }
        let fss = set_price(
            min_price=safe_int(document.getElementById('food_fw_0').value),
            max_price=safe_int(document.getElementById('food_fw_1').value),
            stocks=stocks,
            prices=[0, 0, 0],
            bonus=[safe_int(document.getElementById('bonus_1').value), safe_int(document.getElementById('bonus_2').value), safe_int(document.getElementById('bonus_3').value)],
        )
        food_sell_strat[0] += fss[2] * p[i][0]
        food_sell_strat[1] += fss[3] * p[i][0]
    }
    toy_sell_strat[0] = 1 / 3 * 50 * safe_int(document.getElementById('toy_total').value) * 0.5 + 2 / 3 * 450 / 11 * safe_int(document.getElementById('toy_total').value) * 0.6
    // console.log('drink_buy_strat', drink_buy_strat)
    // console.log('food_buy_strat', food_buy_strat)
    // console.log('toy_buy_strat', toy_buy_strat)
    // console.log('drink_sell_strat', drink_sell_strat)
    // console.log('food_sell_strat', food_sell_strat)
    // console.log('toy_sell_strat', toy_sell_strat)
    console.timeEnd('计算二阶段打探收益')
    console.time('穷举策略')
    for (let a = 0; a < 3; a++) {
        for (let b = 0; b < 3; b++) {
            for (let c = 0; c < 2; c++) {
                for (let d = 0; d < 3; d++) {
                    for (let e = 0; e < 3; e++) {
                        for (let f = 0; f < 2; f++) {
                            if (a + b + c + d + e + f != detect_time) {
                                continue
                            }
                            let tot = 0
                            tot += sum(drink_buy_strat.slice(0, a))
                            tot += sum(food_buy_strat.slice(0, b))
                            tot += sum(toy_buy_strat.slice(0, c))
                            tot += sum(drink_sell_strat.slice(0, d))
                            tot += sum(food_sell_strat.slice(0, e))
                            tot += sum(toy_sell_strat.slice(0, f))
                            if (tot > max_earn) {
                                max_earn = tot
                                best_strat = [a, b, c]
                            }
                        }
                    }
                }
            }
        }
    }
    console.timeEnd('穷举策略')
    // console.log(max_earn, best_strat)
    if (sum(best_strat) > 0) {
        document.getElementById('L8').innerHTML = get_text('ask_price_result').replace('__ASK_DRINK__', best_strat[0]).replace('__ASK_FOOD__', best_strat[1]).replace('__ASK_TOY__', best_strat[2])
        document.getElementById('detect').value = Math.max(0, detect_time - sum(best_strat))
        document.getElementById(`td_4_3`).classList.add('current_step')
    }
    else {
        determine_input_strategy(Math.min(2, Math.floor(detect_time / 2)))
    }
}

function handle_button_settings () {
    if (document.getElementById('table_settings').style.display == 'none') {
        document.getElementById('table_settings').style.display = '';
        document.getElementById('div_settings').innerHTML = get_text('save_settings');
    }
    else {
        document.getElementById('table_settings').style.display = 'none';
        document.getElementById('div_settings').innerHTML = get_text('settings');
    }
}


function reset_calc() {
    document.getElementById('td_1_7').innerHTML = ''
    document.getElementById('td_2_7').innerHTML = ''
    document.getElementById('td_3_7').innerHTML = ''
    document.getElementById('detect').value = 0
    document.getElementById('L8').innerHTML = get_text('result_here')
}

function reset_td_class() {
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 7; j++) {
            if (document.getElementById(`td_${i}_${j}`)) {
                document.getElementById(`td_${i}_${j}`).classList.remove('current_step')
            }
        }
    }
}

function switch_table() {
    document.getElementById('table_main_0').style.display = 'none'
    document.getElementById('table_main_1').style.display = ''
    document.getElementById('td_4_3').innerHTML = `<div class="div_button" onclick="calculate();">${get_text('check_ok')}</div>`
    document.getElementById('table_main_3').innerHTML = `
    <tr class="tr_border_bottom">
        <th class="td_border_right">${get_text('purchasing_stage_summary')}</th>
        <td>${get_text('total')}</tb>
        <td>${get_text('snowsant')}</tb>
        <td>${get_text('opponent')}A</tb>
        <td>${get_text('opponent')}B</tb>
    </tr>
    <tr>
        <td class="td_border_right">${get_text('drink')}</tb>
        <td>${document.getElementById('drink_total').value}</tb>
        <td>${strattoint[document.getElementById('drink_strat_0').value]} ${document.getElementById('drink_stock_0').innerHTML}</tb>
        <td>${strattoint[document.getElementById('drink_strat_1').value]} ${document.getElementById('drink_stock_1').innerHTML}</tb>
        <td>${strattoint[document.getElementById('drink_strat_2').value]} ${document.getElementById('drink_stock_2').innerHTML}</tb>
    </tr>
    <tr>
        <td class="td_border_right">${get_text('food')}</tb>
        <td>${document.getElementById('food_total').value}</tb>
        <td>${strattoint[document.getElementById('food_strat_0').value]} ${document.getElementById('food_stock_0').innerHTML}</tb>
        <td>${strattoint[document.getElementById('food_strat_1').value]} ${document.getElementById('food_stock_1').innerHTML}</tb>
        <td>${strattoint[document.getElementById('food_strat_2').value]} ${document.getElementById('food_stock_2').innerHTML}</tb>
    </tr>
    <tr>
        <td class="td_border_right">${get_text('toy')}</tb>
        <td>${document.getElementById('toy_total').value}</tb>
        <td>${strattoint[document.getElementById('toy_strat_0').value]} ${document.getElementById('toy_stock_0').innerHTML}</tb>
        <td>${strattoint[document.getElementById('toy_strat_1').value]} ${document.getElementById('toy_stock_1').innerHTML}</tb>
    </tr>
    `

}

function update_settings() {
    let t = +new Date()
    if (t > 1705604400000) {
        drink_buyin = [30, 42, 57]
        food_buyin = [15, 30, 48]
        document.getElementById('drink_fw_0').value = 95
        document.getElementById('drink_fw_1').value = 105
        document.getElementById('food_fw_0').value = 75
        document.getElementById('food_fw_1').value = 85
    }
    if (t > 1706036400000) {
        drink_buyin = [40, 56, 76]
        food_buyin = [20, 40, 64]
        document.getElementById('drink_fw_0').value = 195
        document.getElementById('drink_fw_1').value = 205
        document.getElementById('food_fw_0').value = 155
        document.getElementById('food_fw_1').value = 165
    }
    if (t > 1706295600000) {
        drink_buyin = [50, 70, 95]
        food_buyin = [25, 50, 80]
        document.getElementById('drink_fw_0').value = 245
        document.getElementById('drink_fw_1').value = 255
        document.getElementById('food_fw_0').value = 195
        document.getElementById('food_fw_1').value = 205
    }
}