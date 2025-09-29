<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css'])
    <title>ブログ</title>
</head>

<body>
    <header>
        <h1>ウォルマートセール</h1>
    </header>

    <main class="container">
        <!-- メインコンテンツ列 -->
        <div class="main-column">
            <div class="content-section">
                <p>明日、ウォルマートで大規模な1日限定セールが開催されます。テレビ、ノートパソコン、スマートフォン、ゲーム機など、すべての電化製品が50％オフになります。さらに、家族全員のための衣類、靴、アクセサリーがすべて20％オフでお買い求めいただけます。</p>

                <p>セールは午前7時に始まり、深夜まで続きます。早朝の来店者は、午前10時までに$100以上のお買い物をすると、さらに10％の追加割引を受けられます。オンラインショッピングでは、コード<strong>WMSALE25</strong>を使用すると、$50以上の注文で送料無料になります。</p>

                <p>注目の商品には、わずか$499からの新型iPhoneモデル、$299からの55インチ4Kスマートテレビ、$25からのデザイナージーンズなどがあります。お気に入りの商品を安く手に入れるこの機会をお見逃しなく。</p>

                <p>お店の他には、特別なサプライズがあります。来店した方には、無料のコーヒーとドーナッツを提供します。さらに、3階のイベントスペースでは、子どもたちのための遊び場を設定します。子どもたちは、スライダーを楽しみ、メイクアップやフェイスペインティングを体験することができます。</p>

                <p>また、来店者は、特別なプレゼントをプレゼントします。来店した方には、無料のコーヒーとドーナッツを提供します。さらに、3階のイベントスペースでは、子どもたちのための遊び場を設定します。子どもたちは、スライダーを楽しみ、メイクアップやフェイスペインティングを体験することができます。</p>

                <p>メモを取っておきましょう！</p>

                <div id="add"></div>

                <p>便宜上、以下にあなたのタスクの一覧を提供します。新しいタスクを追加することができます。</p>

                <p>タスクが追加されたかどうか確認してください！</p>

                <div id="search"></div>

                <p>以下に、他のブログのサムネイルを表示します。</p>

                <div class="card" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden; margin-bottom: 20px; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <div class="card-content" style="padding: 12px;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <h3 style="margin-top: 0; color: #333; font-weight: 600; font-size: 1.1em;">他のブログ</h3>
                            <span style="background-color: rgba(0,0,0,0.6); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75em;">おすすめ</span>
                        </div>
                        <p style="color: #666; font-size: 0.85em; margin: 6px 0;">これは他のブログのサムネイルを表す仮のカードです。</p>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
                            <span style="color: #888; font-size: 0.75em;">2025年6月26日</span>
                            <a href="#" style="text-decoration: none; color: #4a6baf; font-size: 0.85em;">続きを読む →</a>
                        </div>
                    </div>
                </div>

                <div class="card" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden; margin-bottom: 20px; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <div class="card-content" style="padding: 12px;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <h3 style="margin-top: 0; color: #333; font-weight: 600; font-size: 1.1em;">他のブログ</h3>
                            <span style="background-color: rgba(0,0,0,0.6); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75em;">おすすめ</span>
                        </div>
                        <p style="color: #666; font-size: 0.85em; margin: 6px 0;">これは他のブログのサムネイルを表す仮のカードです。</p>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
                            <span style="color: #888; font-size: 0.75em;">2025年6月26日</span>
                            <a href="#" style="text-decoration: none; color: #4a6baf; font-size: 0.85em;">続きを読む →</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- サイドバー検索列 -->
        <div class="sidebar">
            <div class="content-section">
                <h3>ここにタスク一覧が表示されます。</h3>

                <div id="jobs"></div>
            </div>
        </div>
    </main>

    @vite(['resources/js/app.js'])
</body>

</html>