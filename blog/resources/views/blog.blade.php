<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css'])
    <title>求人情報</title>
</head>

<body>
    <header>
        <h1>求人情報</h1>
    </header>

    <main class="container">
        <!-- メインコンテンツ列 -->
        <div class="main-column">
            <div class="content-section">
                <p>私たちの会社では、優秀な人材を募集しています。フルスタック開発者、UI/UXデザイナー、プロジェクトマネージャー、データサイエンティストなど、様々なポジションで新しいチームメンバーを求めています。経験豊富な方から新卒の方まで、幅広く歓迎いたします。</p>

                <p>勤務時間は午前9時から午後6時まで、フレックスタイム制を導入しており、リモートワークも可能です。早期入社の方には、入社から3ヶ月以内に成果を上げた場合、特別ボーナスを支給いたします。また、スキルアップのための研修費用は会社が全額負担します。</p>

                <p>注目のポジションには、年収600万円からのシニア開発者、年収450万円からのUI/UXデザイナー、年収500万円からのプロジェクトマネージャーなどがあります。あなたのキャリアを次のレベルに押し上げるこの機会をお見逃しなく。</p>

                <p>オフィスには、充実した福利厚生があります。社員食堂では無料のランチとコーヒーを提供しています。さらに、屋上のリラクゼーションスペースでは、卓球台やゲームコーナーを設置しています。社員は休憩時間に、リフレッシュしながら同僚との交流を深めることができます。</p>

                <p>また、新入社員には、特別なウェルカムパッケージを用意しています。最新のノートパソコンと開発ツールを支給し、快適な作業環境を提供します。さらに、メンター制度により、経験豊富な先輩社員がサポートします。チームビルディングイベントや技術勉強会も定期的に開催しています。</p>

                <p>応募の準備をしましょう！</p>

                <p>便宜上、以下にあなたの応募タスクの一覧を提供します。新しいタスクを追加することができます。</p>

                <p>ここで興味のあるポジションを探しましょう！</p>

                <div id="search"></div>

                <p>以下に、他の求人情報のサムネイルを表示します。</p>

                <div class="card" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden; margin-bottom: 20px; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <div class="card-content" style="padding: 12px;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <h3 style="margin-top: 0; color: #333; font-weight: 600; font-size: 1.1em;">他の求人情報</h3>
                            <span style="background-color: rgba(0,0,0,0.6); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75em;">急募</span>
                        </div>
                        <p style="color: #666; font-size: 0.85em; margin: 6px 0;">これは他の求人情報のサムネイルを表す仮のカードです。</p>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
                            <span style="color: #888; font-size: 0.75em;">2025年6月26日</span>
                            <a href="#" style="text-decoration: none; color: #4a6baf; font-size: 0.85em;">詳細を見る →</a>
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
                <h3>ここでご応募ください！</h3>

                <div id="enrollments"></div>
            </div>
        </div>
    </main>

    @vite(['resources/js/app.js'])
</body>

</html>