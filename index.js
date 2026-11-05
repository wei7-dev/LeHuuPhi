/* ==========================================================================
   LÊ HỮU PHI — PORTFOLIO V2
   JavaScript thuần: song ngữ, theme, nav nổi, copy email, giờ Việt Nam.
   ========================================================================== */
(function () {
    'use strict';

    var root = document.documentElement;
    var body = document.body;

    /* ----------------------------------------------------------------------
       01. TỪ ĐIỂN SONG NGỮ
    ---------------------------------------------------------------------- */
    var translations = {
        vi: {
            'meta.title': 'Lê Hữu Phi — Frontend Developer',
            'meta.description': 'Portfolio của Lê Hữu Phi — frontend developer tại Quy Nhơn, Việt Nam. Sinh năm 2007, đang học tại Quy Nhon College of Technology. Xem dự án HRM System, Honda Showroom và Honda Admin.',
            'meta.ogTitle': 'Lê Hữu Phi — Frontend Developer',
            'meta.ogDescription': 'Frontend developer tại Quy Nhơn. Mình biến ý tưởng thành dự án thật — xem các dự án và liên hệ với mình.',
            'meta.ogAlt': 'Trang chủ portfolio Lê Hữu Phi — Biến ý tưởng thành dự án thật',
            'meta.twitterDescription': 'Frontend developer tại Quy Nhơn. Xem các dự án HRM System, Honda Showroom và Honda Admin.',
            'skip': 'Bỏ qua điều hướng',

            'nav.label': 'Điều hướng chính',
            'nav.about': 'Giới thiệu',
            'nav.skills': 'Kỹ năng',
            'nav.projects': 'Dự án',
            'nav.experience': 'Kinh nghiệm',
            'nav.contact': 'Liên hệ',
            'nav.langLabel': 'Chọn ngôn ngữ',

            'topbar.brand': 'Dấu ấn cá nhân',
            'topbar.brandAria': 'Dấu ấn cá nhân — về đầu trang',
            'topbar.note': 'Hồ sơ cá nhân · 2026',
            'theme.toLight': 'Chuyển sang giao diện sáng',
            'theme.toDark': 'Chuyển sang giao diện tối',

            'hero.hello': 'Xin chào, mình là Phi.',
            'hero.quote1': 'Biến ý tưởng',
            'hero.quote2': 'thành <em>dự án thật.</em>',
            'hero.lede': 'Mình là <strong>frontend developer</strong> tại Quy Nhơn. Mình đang học, đang làm và đang tìm cơ hội đầu tiên để biến những gì học được thành sản phẩm có ích.',
            'hero.ctaProjects': 'Xem dự án',
            'hero.ctaContact': 'Kết nối với mình',
            'hero.metaLocation': 'Quy Nhơn, Việt Nam',
            'hero.metaBirth': 'Sinh năm 2007',
            'hero.metaStudent': 'Sinh viên',
            'hero.portraitNote': 'Quy Nhơn · 2007',
            'hero.avatarAlt': 'Minh hoạ Lê Hữu Phi đang làm việc bên máy tính',
            'hero.status': 'Đang tìm cơ hội',
            'hero.role': 'Frontend developer · Quy Nhơn',
            'hero.scroll': 'Cuộn xuống',
            'hero.version': 'Portfolio v2 · 2026',

            'about.eyebrow': 'Giới thiệu',
            'about.title': 'Một chút về <em>mình.</em>',
            'about.desc': 'Vài điều cơ bản để bạn biết mình là ai, đang học gì và đang tìm gì.',
            'about.p1': 'Mình là Lê Hữu Phi, sinh năm 2007, hiện sống ở Quy Nhơn. Mình đang học tại Quy Nhon College of Technology và dành phần lớn thời gian rảnh để tự học frontend.',
            'about.p2': 'Mình thích biến những ý tưởng nhỏ thành trang web có thể dùng được — từ layout, tương tác đến lúc đưa lên mạng. Hiện tại mình đang tìm cơ hội thực tập hoặc vị trí junior để học thêm từ một team thật.',
            'about.signature': '— Phi.',
            'about.factsTitle': 'Hồ sơ nhanh',
            'about.factsLabel': 'Hiện tại',
            'about.locationLabel': 'Địa điểm',
            'about.locationValue': 'Quy Nhơn, Bình Định, Việt Nam',
            'about.birthLabel': 'Năm sinh',
            'about.birthValue': '2007',
            'about.schoolLabel': 'Trường học',
            'about.schoolValue': 'Quy Nhon College of Technology',
            'about.schoolAria': 'Mở website trường trong tab mới',
            'about.schoolLogoAlt': 'Logo Trường Cao đẳng Kỹ thuật Công nghệ Quy Nhơn',
            'about.statusLabel': 'Trạng thái',
            'about.statusValue': 'Đang tìm cơ hội thực tập hoặc junior',
            'about.current': 'Sinh viên · Tự học frontend',

            'skills.eyebrow': 'Kỹ năng',
            'skills.title': 'Những gì mình dùng <em>mỗi ngày.</em>',
            'skills.desc': 'Bốn nhóm công nghệ mình dùng thường xuyên, từ giao diện đến dữ liệu và công cụ làm việc.',
            'skills.frontendTitle': 'Frontend',
            'skills.frontendHint': 'Giao diện',
            'skills.frontendDesc': 'Dựng layout, responsive và tương tác trên trình duyệt.',
            'skills.frontendAria': 'Công nghệ frontend',
            'skills.backendTitle': 'Backend',
            'skills.backendHint': 'Máy chủ',
            'skills.backendDesc': 'Xử lý logic và làm quen với các ngôn ngữ phía máy chủ.',
            'skills.backendAria': 'Công nghệ backend',
            'skills.databaseTitle': 'Database',
            'skills.databaseHint': 'Dữ liệu',
            'skills.databaseDesc': 'Lưu trữ, truy vấn và đồng bộ dữ liệu cho dự án.',
            'skills.databaseAria': 'Cơ sở dữ liệu',
            'skills.toolsTitle': 'Công cụ khác',
            'skills.toolsHint': 'Quy trình',
            'skills.toolsDesc': 'Quản lý phiên bản, kết nối API và dựng giao diện.',
            'skills.toolsAria': 'Công cụ khác',
            'skills.note': 'Mình không đo kỹ năng bằng phần trăm — mình đo bằng những gì đã làm được.',

            'work.eyebrow': 'Dự án',
            'work.title': 'Những thứ mình <em>đã làm.</em>',
            'work.desc': 'Chọn lọc vài dự án mình tâm đắc. Tất cả đều có link để bạn xem trực tiếp.',
            'work.featuredLabel': 'Dự án nổi bật',
            'work.viewProject': 'Xem dự án',
            'work.sourceCode': 'Mã nguồn',
            'work.p1.meta': 'Web application · 2026',
            'work.p1.desc': 'Hệ thống quản lý nhân sự, chấm công, lịch làm việc và báo cáo tài chính. Giao diện và luồng tương tác được viết bằng HTML, CSS, JavaScript; dữ liệu đăng nhập và thời gian thực chạy trên Firebase.',
            'work.p2.meta': 'E-commerce · 2026',
            'work.p2.desc': 'Showroom xe máy đa trang với danh mục, tìm kiếm, bộ lọc sản phẩm và modal chi tiết xe. Dữ liệu sản phẩm được tách khỏi giao diện để dễ cập nhật; trải nghiệm tối ưu từ mobile đến desktop.',
            'work.otherLabel': 'Dự án khác',
            'work.otherDesc': 'Những thứ nhỏ hơn, làm sau giờ học.',
            'work.o1.aria': 'Mở bản demo Honda Admin trong tab mới',
            'work.o1.desc': 'Dashboard quản trị kho, sản phẩm và hoá đơn. Demo: admin / admin123.',
            'work.o2.aria': 'Mở bản Profile Card v1 trong tab mới',
            'work.o2.desc': 'Phiên bản đầu tiên của trang CV này — lưu lại để so sánh.',
            'work.otherNote': 'Mình đang làm thêm vài thứ nhỏ. Danh sách này sẽ được cập nhật.',

            'exp.eyebrow': 'Kinh nghiệm',
            'exp.title': 'Phần này còn <em>để trống.</em>',
            'exp.p': 'Mình vẫn đang học và chưa có kinh nghiệm làm việc thực tế. Mình không muốn điền vào đây những thứ chưa xảy ra, nên sẽ để dành phần này cho bản v3 — khi có cơ hội thực tập hoặc công việc đầu tiên.',
            'exp.badge': 'Cập nhật ở v3',
            'exp.cta': 'Xem các dự án mình đã làm',
            'exp.trackAria': 'Lộ trình kinh nghiệm',
            'exp.nowLabel': 'Hiện tại',
            'exp.nowValue': 'Sinh viên · Tự học và làm dự án',
            'exp.nowNote': 'Mình đang học và tự làm dự án để tích lũy kinh nghiệm.',
            'exp.futureValue': 'Chờ trải nghiệm đầu tiên',
            'exp.futureNote': 'Khi có cơ hội thực tập hoặc công việc đầu tiên, mình sẽ cập nhật phần này.',

            'contact.eyebrow': 'Liên hệ',
            'contact.title': 'Cùng <em>nói chuyện</em> nhé.',
            'contact.p': 'Nếu bạn đang tìm một frontend developer cho vị trí thực tập, junior hoặc một dự án nhỏ, mình rất muốn nghe từ bạn.',
            'contact.emailCta': 'Gửi email cho mình',
            'contact.note': 'Mình thường phản hồi trong vòng 48 giờ.',
            'contact.copy': 'Copy',
            'contact.copied': 'Đã copy',
            'contact.copyAria': 'Sao chép địa chỉ email',
            'contact.copiedAria': 'Đã sao chép email',
            'contact.phoneLabel': 'Điện thoại',
            'contact.locationLabel': 'Địa chỉ',
            'contact.locationValue': 'Quy Nhơn, Bình Định, Việt Nam',
            'contact.responseLabel': 'Phản hồi',
            'contact.responseValue': 'Trong vòng 48 giờ',
            'contact.socialLabel': 'Mạng xã hội',
            'contact.githubAria': 'Mở GitHub trong tab mới',
            'contact.facebookAria': 'Mở Facebook trong tab mới',
            'contact.zaloAria': 'Mở Zalo trong tab mới',

            'footer.tagline': 'Frontend developer<br>tại Quy Nhơn, Việt Nam.',
            'footer.navLabel': 'Điều hướng footer',
            'footer.version': 'Phiên bản 2.0 / 2026',
            'footer.v1': 'Xem bản v1 ↗',
            'footer.built': 'Thiết kế &amp; code bằng HTML, CSS, JavaScript.',
            'footer.top': 'Lên đầu ↑',
            'footer.localTime': 'Quy Nhơn',

            'toast.copied': 'Đã sao chép email — hẹn gặp bạn trong hộp thư!',
            'toast.copyError': 'Không thể sao chép tự động. Bạn hãy chọn email để copy nhé.'
        },

        en: {
            'meta.title': 'Lê Hữu Phi — Frontend Developer',
            'meta.description': 'Portfolio of Lê Hữu Phi — a frontend developer based in Quy Nhon, Vietnam. Born in 2007 and studying at Quy Nhon College of Technology. View the HRM System, Honda Showroom, and Honda Admin projects.',
            'meta.ogTitle': 'Lê Hữu Phi — Frontend Developer',
            'meta.ogDescription': 'Frontend developer based in Quy Nhon. I turn ideas into real projects — view my work and get in touch.',
            'meta.ogAlt': "Lê Hữu Phi's portfolio homepage — turning ideas into real projects",
            'meta.twitterDescription': 'Frontend developer based in Quy Nhon. View the HRM System, Honda Showroom, and Honda Admin projects.',
            'skip': 'Skip to content',

            'nav.label': 'Main navigation',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.experience': 'Experience',
            'nav.contact': 'Contact',
            'nav.langLabel': 'Choose language',

            'topbar.brand': 'My Portfolio',
            'topbar.brandAria': 'My Portfolio — back to top',
            'topbar.note': 'Personal CV · 2026',
            'theme.toLight': 'Switch to light theme',
            'theme.toDark': 'Switch to dark theme',

            'hero.hello': "Hi, I'm Phi.",
            'hero.quote1': 'Turning ideas',
            'hero.quote2': 'into <em>real projects.</em>',
            'hero.lede': "I'm a <strong>frontend developer</strong> based in Quy Nhon. I'm learning, building, and looking for my first opportunity to turn what I learn into useful products.",
            'hero.ctaProjects': 'View projects',
            'hero.ctaContact': 'Get in touch',
            'hero.metaLocation': 'Quy Nhon, Vietnam',
            'hero.metaBirth': 'Born in 2007',
            'hero.metaStudent': 'Student',
            'hero.portraitNote': 'Quy Nhon · 2007',
            'hero.avatarAlt': 'Illustration of Lê Hữu Phi working at a computer',
            'hero.status': 'Open to opportunities',
            'hero.role': 'Frontend developer · Quy Nhon',
            'hero.scroll': 'Scroll down',
            'hero.version': 'Portfolio v2 · 2026',

            'about.eyebrow': 'About',
            'about.title': 'A little <em>about me.</em>',
            'about.desc': "A few basics so you know who you're reading about.",
            'about.p1': "I'm Lê Hữu Phi, born in 2007 and currently living in Quy Nhon. I study at Quy Nhon College of Technology and spend most of my free time teaching myself frontend development.",
            'about.p2': 'I like turning small ideas into websites people can actually use — from layout and interaction to shipping it online. I am currently looking for an internship or junior role where I can learn from a real team.',
            'about.signature': '— Phi.',
            'about.factsTitle': 'Quick facts',
            'about.factsLabel': 'Currently',
            'about.locationLabel': 'Location',
            'about.locationValue': 'Quy Nhon, Binh Dinh, Vietnam',
            'about.birthLabel': 'Year of birth',
            'about.birthValue': '2007',
            'about.schoolLabel': 'School',
            'about.schoolValue': 'Quy Nhon College of Technology',
            'about.schoolAria': 'Open the school website in a new tab',
            'about.schoolLogoAlt': 'Quy Nhon College of Technology logo',
            'about.statusLabel': 'Status',
            'about.statusValue': 'Looking for an internship or junior role',
            'about.current': 'Student · Self-taught frontend',

            'skills.eyebrow': 'Skills',
            'skills.title': 'What I use <em>every day.</em>',
            'skills.desc': 'Four groups of tools I use regularly, from the interface to data and workflow.',
            'skills.frontendTitle': 'Frontend',
            'skills.frontendHint': 'Interface',
            'skills.frontendDesc': 'Building layouts, responsive behaviour, and browser interactions.',
            'skills.frontendAria': 'Frontend technologies',
            'skills.backendTitle': 'Backend',
            'skills.backendHint': 'Server',
            'skills.backendDesc': 'Working with logic and server-side languages.',
            'skills.backendAria': 'Backend technologies',
            'skills.databaseTitle': 'Database',
            'skills.databaseHint': 'Data',
            'skills.databaseDesc': 'Storing, querying, and syncing data for projects.',
            'skills.databaseAria': 'Databases',
            'skills.toolsTitle': 'Other tools',
            'skills.toolsHint': 'Workflow',
            'skills.toolsDesc': 'Version control, API connections, and interface design.',
            'skills.toolsAria': 'Other tools',
            'skills.note': "I don't measure skills in percentages — I measure them by what I've built.",

            'work.eyebrow': 'Projects',
            'work.title': "Things I've <em>built.</em>",
            'work.desc': "A few projects I'm proud of. Every one has a live link you can try.",
            'work.featuredLabel': 'Featured projects',
            'work.viewProject': 'View project',
            'work.sourceCode': 'Source code',
            'work.p1.meta': 'Web application · 2026',
            'work.p1.desc': 'An HR system for employee records, time tracking, work schedules, and financial reports. The interface and interactions are built with HTML, CSS, and JavaScript, with authentication and real-time data on Firebase.',
            'work.p2.meta': 'E-commerce · 2026',
            'work.p2.desc': 'A multi-page motorcycle showroom with categories, search, product filters, and a bike detail modal. Product data is kept separate from the interface for easier updates, with an experience tuned from mobile to desktop.',
            'work.otherLabel': 'Other projects',
            'work.otherDesc': 'Smaller things, built after class.',
            'work.o1.aria': 'Open the Honda Admin demo in a new tab',
            'work.o1.desc': 'Inventory, product, and invoice dashboard. Demo login: admin / admin123.',
            'work.o2.aria': 'Open the Profile Card v1 archive in a new tab',
            'work.o2.desc': 'The first version of this CV site — kept for comparison.',
            'work.otherNote': "I'm working on a few smaller things. This list will keep growing.",

            'exp.eyebrow': 'Experience',
            'exp.title': 'This part is still <em>empty.</em>',
            'exp.p': "I'm still studying and don't have real-world work experience yet. I don't want to fill this section with things that haven't happened, so I'm saving it for v3 — when I land my first internship or job.",
            'exp.badge': 'Coming in v3',
            'exp.cta': "See what I've built",
            'exp.trackAria': 'Experience timeline',
            'exp.nowLabel': 'Now',
            'exp.nowValue': 'Student · Learning and building',
            'exp.nowNote': "I'm studying and building projects to gain experience.",
            'exp.futureValue': 'Waiting for the first real-world role',
            'exp.futureNote': 'When I land my first internship or job, this section will be updated.',

            'contact.eyebrow': 'Contact',
            'contact.title': "Let's <em>talk.</em>",
            'contact.p': "If you're looking for a frontend developer for an internship, a junior role, or a small project, I'd love to hear from you.",
            'contact.emailCta': 'Send me an email',
            'contact.note': 'I usually reply within 48 hours.',
            'contact.copy': 'Copy',
            'contact.copied': 'Copied',
            'contact.copyAria': 'Copy email address',
            'contact.copiedAria': 'Email copied',
            'contact.phoneLabel': 'Phone',
            'contact.locationLabel': 'Location',
            'contact.locationValue': 'Quy Nhon, Binh Dinh, Vietnam',
            'contact.responseLabel': 'Response',
            'contact.responseValue': 'Within 48 hours',
            'contact.socialLabel': 'Social',
            'contact.githubAria': 'Open GitHub in a new tab',
            'contact.facebookAria': 'Open Facebook in a new tab',
            'contact.zaloAria': 'Open Zalo in a new tab',

            'footer.tagline': 'Frontend developer<br>based in Quy Nhon, Vietnam.',
            'footer.navLabel': 'Footer navigation',
            'footer.version': 'Version 2.0 / 2026',
            'footer.v1': 'View v1 ↗',
            'footer.built': 'Designed &amp; coded with HTML, CSS, and JavaScript.',
            'footer.top': 'Back to top ↑',
            'footer.localTime': 'Quy Nhon',

            'toast.copied': 'Email copied — talk soon!',
            'toast.copyError': "Couldn't copy automatically. Please select the email to copy."
        }
    };

    var LANG_KEY = 'portfolio-lang';
    var THEME_KEY = 'portfolio-theme';
    var lang = 'vi';

    function t(key) {
        var pack = translations[lang] || translations.vi;
        return Object.prototype.hasOwnProperty.call(pack, key) ? pack[key] : key;
    }

    /* ----------------------------------------------------------------------
       02. NGÔN NGỮ
    ---------------------------------------------------------------------- */
    var langButtons = Array.prototype.slice.call(document.querySelectorAll('[data-lang]'));

    function setMetaContent(id, content) {
        var element = document.getElementById(id);
        if (element) {
            element.setAttribute('content', content);
        }
    }

    function updateLanguageUrl() {
        try {
            var url = new URL(window.location.href);
            if (lang === 'en') {
                url.searchParams.set('lang', 'en');
            } else {
                url.searchParams.delete('lang');
            }
            window.history.replaceState(null, '', url.pathname + url.search + url.hash);
        } catch (error) {
            /* Bỏ qua nếu trình duyệt chặn history hoặc đang mở file:// */
        }
    }

    function translatePage() {
        root.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            var key = element.getAttribute('data-i18n');
            var value = t(key);
            if (value !== key) {
                element.innerHTML = value;
            }
        });

        ['aria-label', 'title', 'alt'].forEach(function (attribute) {
            var dataAttribute = 'data-i18n-' + attribute;
            document.querySelectorAll('[' + dataAttribute + ']').forEach(function (element) {
                var key = element.getAttribute(dataAttribute);
                var value = t(key);
                if (value !== key) {
                    element.setAttribute(attribute, value);
                }
            });
        });

        document.title = t('meta.title');
        setMetaContent('meta-description', t('meta.description'));
        setMetaContent('og-title', t('meta.ogTitle'));
        setMetaContent('og-description', t('meta.ogDescription'));
        setMetaContent('og-image-alt', t('meta.ogAlt'));
        setMetaContent('twitter-title', t('meta.ogTitle'));
        setMetaContent('twitter-description', t('meta.twitterDescription'));
        setMetaContent('og-locale', lang === 'en' ? 'en_US' : 'vi_VN');

        langButtons.forEach(function (button) {
            var active = button.getAttribute('data-lang') === lang;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }

    function setLanguage(nextLang, options) {
        options = options || {};
        lang = nextLang === 'en' ? 'en' : 'vi';

        translatePage();
        applyTheme(getTheme(), false);
        resetCopyButton();
        updateLocalTime();
        updateDockIndicator();

        if (options.persist !== false) {
            try {
                localStorage.setItem(LANG_KEY, lang);
            } catch (error) {
                /* localStorage bị chặn — bỏ qua. */
            }
        }

        if (options.updateUrl !== false) {
            updateLanguageUrl();
        }

        updateDockIndicator();
    }

    langButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            setLanguage(button.getAttribute('data-lang'));
        });
    });

    /* ----------------------------------------------------------------------
       03. THEME SÁNG / TỐI
    ---------------------------------------------------------------------- */
    var themeToggle = document.getElementById('theme-toggle');
    var themeMeta = document.getElementById('theme-color');
    var themeColors = {
        dark: '#171310',
        light: '#f4eee3'
    };

    function getTheme() {
        return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function applyTheme(theme, persist) {
        root.setAttribute('data-theme', theme);

        if (themeMeta) {
            themeMeta.setAttribute('content', themeColors[theme]);
        }

        if (themeToggle) {
            var label = theme === 'dark' ? t('theme.toLight') : t('theme.toDark');
            themeToggle.setAttribute('aria-label', label);
            themeToggle.setAttribute('title', label);
        }

        if (persist) {
            try {
                localStorage.setItem(THEME_KEY, theme);
            } catch (error) {
                /* Trình duyệt chặn localStorage — bỏ qua. */
            }
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            applyTheme(getTheme() === 'dark' ? 'light' : 'dark', true);
        });
    }

    /* ----------------------------------------------------------------------
       04. DOCK: ACTIVE SECTION + INDICATOR
    ---------------------------------------------------------------------- */
    var dockLinksContainer = document.getElementById('dock-links');
    var dockIndicator = document.getElementById('dock-indicator');
    var dockLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
    var sections = dockLinks
        .map(function (link) {
            var target = link.getAttribute('href');
            return target ? document.querySelector(target) : null;
        })
        .filter(Boolean);
    var activeSectionId = null;

    function updateDockIndicator() {
        if (!dockLinksContainer || !dockIndicator) {
            return;
        }

        var activeLink = dockLinksContainer.querySelector('.dock-link.is-active');
        if (!activeLink) {
            dockIndicator.style.opacity = '0';
            return;
        }

        var containerRect = dockLinksContainer.getBoundingClientRect();
        var linkRect = activeLink.getBoundingClientRect();

        dockIndicator.style.width = linkRect.width + 'px';
        dockIndicator.style.transform = 'translateX(' + (linkRect.left - containerRect.left) + 'px)';
        dockIndicator.style.opacity = '1';
    }

    function setActiveSection(sectionId) {
        if (sectionId === activeSectionId) {
            return;
        }

        activeSectionId = sectionId;

        dockLinks.forEach(function (link) {
            var active = link.getAttribute('data-nav') === sectionId;
            link.classList.toggle('is-active', active);

            if (active) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });

        updateDockIndicator();
    }

    function updateActiveSection() {
        if (!sections.length) {
            return;
        }

        var probe = window.innerHeight * 0.46;
        var currentId = null;

        sections.forEach(function (section) {
            var rect = section.getBoundingClientRect();
            if (rect.top <= probe) {
                currentId = section.id;
            }
        });

        setActiveSection(currentId);
    }

    var dock = document.getElementById('dock');
    var lastScrollY = window.scrollY;

    function updateDockVisibility() {
        if (!dock) {
            return;
        }

        var currentY = window.scrollY;
        var delta = currentY - lastScrollY;

        if (Math.abs(delta) < 8) {
            return;
        }

        if (currentY <= 72) {
            dock.classList.remove('is-hidden');
        } else if (delta > 0) {
            dock.classList.add('is-hidden');
        } else {
            dock.classList.remove('is-hidden');
        }

        lastScrollY = currentY;
    }

    function requestActiveUpdate() {
        updateActiveSection();
        updateDockVisibility();
    }

    updateActiveSection();

    window.addEventListener('scroll', requestActiveUpdate, { passive: true });
    window.addEventListener('resize', requestActiveUpdate, { passive: true });

    dockLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            setActiveSection(link.getAttribute('data-nav'));
        });
    });

    var resizeTicking = false;
    window.addEventListener('resize', function () {
        if (!resizeTicking) {
            resizeTicking = true;
            window.requestAnimationFrame(function () {
                updateDockIndicator();
                resizeTicking = false;
            });
        }
    }, { passive: true });

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateDockIndicator);
    }

    /* ----------------------------------------------------------------------
       05. REVEAL KHI CUỘN
    ---------------------------------------------------------------------- */
    var revealElements = document.querySelectorAll('.reveal');
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -36px 0px',
            threshold: 0.06
        });

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add('is-visible');
        });
    }

    /* ----------------------------------------------------------------------
       06. COPY EMAIL
    ---------------------------------------------------------------------- */
    var copyButton = document.getElementById('copy-email');
    var toast = document.getElementById('toast');
    var toastTimer;
    var copyResetTimer;

    function showToast(message) {
        if (!toast) {
            return;
        }

        toast.textContent = message;
        toast.classList.add('is-visible');

        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(function () {
            toast.classList.remove('is-visible');
        }, 2600);
    }

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }

        return new Promise(function (resolve, reject) {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            textarea.style.pointerEvents = 'none';
            document.body.appendChild(textarea);
            textarea.select();

            try {
                var copied = document.execCommand('copy');
                document.body.removeChild(textarea);

                if (copied) {
                    resolve();
                } else {
                    reject(new Error('Copy command was rejected.'));
                }
            } catch (error) {
                document.body.removeChild(textarea);
                reject(error);
            }
        });
    }

    function resetCopyButton() {
        if (!copyButton) {
            return;
        }

        window.clearTimeout(copyResetTimer);
        copyButton.classList.remove('is-copied');

        var label = copyButton.querySelector('span');
        if (label) {
            label.textContent = t('contact.copy');
        }

        copyButton.setAttribute('aria-label', t('contact.copyAria'));
    }

    if (copyButton) {
        copyButton.addEventListener('click', function () {
            var email = copyButton.getAttribute('data-copy') || '';

            copyText(email)
                .then(function () {
                    copyButton.classList.add('is-copied');

                    var label = copyButton.querySelector('span');
                    if (label) {
                        label.textContent = t('contact.copied');
                    }

                    copyButton.setAttribute('aria-label', t('contact.copiedAria'));
                    showToast(t('toast.copied'));

                    window.clearTimeout(copyResetTimer);
                    copyResetTimer = window.setTimeout(resetCopyButton, 2200);
                })
                .catch(function () {
                    showToast(t('toast.copyError'));
                });
        });
    }

    /* ----------------------------------------------------------------------
       07. NĂM & GIỜ VIỆT NAM
    ---------------------------------------------------------------------- */
    var yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = String(new Date().getFullYear());
    }

    var timeElement = document.getElementById('local-time');

    function updateLocalTime() {
        if (!timeElement) {
            return;
        }

        try {
            var formatter = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });

            timeElement.textContent = t('footer.localTime') + ' · ' + formatter.format(new Date());
        } catch (error) {
            timeElement.textContent = t('footer.localTime') + ' · GMT+7';
        }
    }

    if (timeElement) {
        updateLocalTime();
        window.setInterval(updateLocalTime, 30000);
    }

    /* ----------------------------------------------------------------------
       08. KHỞI TẠO
    ---------------------------------------------------------------------- */
    var queryLang = null;
    try {
        queryLang = new URLSearchParams(window.location.search).get('lang');
    } catch (error) {
        queryLang = null;
    }

    var storedLang = null;
    try {
        storedLang = localStorage.getItem(LANG_KEY);
    } catch (error) {
        storedLang = null;
    }

    var initialLang = 'vi';
    if (queryLang === 'en' || queryLang === 'vi') {
        initialLang = queryLang;
    } else if (storedLang === 'en' || storedLang === 'vi') {
        initialLang = storedLang;
    }

    setLanguage(initialLang, { persist: false, updateUrl: false });
    applyTheme(getTheme(), false);
}());
