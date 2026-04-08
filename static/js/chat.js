const refs = {
    chatList: document.getElementById("chat-list"),
    chatSearch: document.getElementById("chat-search"),
    chatFilters: document.getElementById("chat-filters"),
    messageSearch: document.getElementById("message-search"),
    chatApp: document.getElementById("chat-app"),
    conversationPane: document.querySelector(".conversation"),
    conversationAvatar: document.getElementById("conversation-avatar"),
    conversationTitle: document.getElementById("conversation-title"),
    conversationStatus: document.getElementById("conversation-status"),
    voiceCallButton: document.getElementById("voice-call-btn"),
    videoCallButton: document.getElementById("video-call-btn"),
    muteChatButton: document.getElementById("mute-chat-btn"),
    chatInfoButton: document.getElementById("chat-info-btn"),
    chatMenu: document.getElementById("chat-menu"),
    chatMenuItems: document.querySelectorAll("#chat-menu [data-chat-menu-action]"),
    callMenu: document.getElementById("call-menu"),
    callMenuAvatar: document.getElementById("call-menu-avatar"),
    callMenuName: document.getElementById("call-menu-name"),
    callPanel: document.getElementById("call-panel"),
    callModeBadge: document.getElementById("call-mode-badge"),
    callMeta: document.getElementById("call-meta"),
    callAvatar: document.getElementById("call-avatar"),
    callName: document.getElementById("call-name"),
    callStatusText: document.getElementById("call-status-text"),
    remoteVideo: document.getElementById("remote-video"),
    remoteAudio: document.getElementById("remote-audio"),
    localVideo: document.getElementById("local-video"),
    callPlaceholder: document.getElementById("call-placeholder"),
    incomingCallActions: document.getElementById("incoming-call-actions"),
    callControls: document.getElementById("call-controls"),
    acceptCallButton: document.getElementById("accept-call-btn"),
    rejectCallButton: document.getElementById("reject-call-btn"),
    endCallButton: document.getElementById("end-call-btn"),
    toggleMicButton: document.getElementById("toggle-mic-btn"),
    toggleCameraButton: document.getElementById("toggle-camera-btn"),
    chatInfoDrawer: document.getElementById("chat-info-drawer"),
    closeInfoButton: document.getElementById("close-info-btn"),
    infoName: document.getElementById("info-name"),
    infoPhone: document.getElementById("info-phone"),
    infoState: document.getElementById("info-state"),
    infoLastSeen: document.getElementById("info-last-seen"),
    infoMessageCount: document.getElementById("info-message-count"),
    infoMediaCount: document.getElementById("info-media-count"),
    infoUnreadCount: document.getElementById("info-unread-count"),
    infoFingerprint: document.getElementById("info-fingerprint"),
    infoPreferences: document.getElementById("info-preferences"),
    infoTogglePinButton: document.getElementById("info-toggle-pin-btn"),
    infoToggleMuteButton: document.getElementById("info-toggle-mute-btn"),
    infoDeleteChatButton: document.getElementById("info-delete-chat-btn"),
    messagesScroller: document.getElementById("messages-scroller"),
    messages: document.getElementById("messages"),
    emptyState: document.getElementById("empty-state"),
    loadMoreButton: document.getElementById("load-more-btn"),
    composer: document.getElementById("composer"),
    messageInput: document.getElementById("message-input"),
    fileInput: document.getElementById("file-input"),
    cameraInput: document.getElementById("camera-input"),
    statusFileInput: document.getElementById("status-file-input"),
    cameraButton: document.getElementById("camera-btn"),
    cameraMenu: document.getElementById("camera-menu"),
    cameraMenuPhoto: document.getElementById("camera-menu-photo"),
    cameraMenuVideo: document.getElementById("camera-menu-video"),
    attachmentPreview: document.getElementById("attachment-preview"),
    captureModal: document.getElementById("capture-modal"),
    captureLive: document.getElementById("capture-live"),
    capturePhotoPreview: document.getElementById("capture-photo-preview"),
    captureVideoPreview: document.getElementById("capture-video-preview"),
    captureEmpty: document.getElementById("capture-empty"),
    captureStatus: document.getElementById("capture-status"),
    capturePhotoButton: document.getElementById("capture-photo-btn"),
    captureRecordButton: document.getElementById("capture-record-btn"),
    captureUseButton: document.getElementById("capture-use-btn"),
    captureCloseButton: document.getElementById("capture-close-btn"),
    captureFallbackButton: document.getElementById("capture-fallback-btn"),
    captureFlashButton: document.getElementById("capture-flash-btn"),
    captureSwitchButton: document.getElementById("capture-switch-btn"),
    captureFlashOverlay: document.getElementById("capture-flash"),
    emojiBar: document.getElementById("emoji-bar"),
    emojiToggleButton: document.getElementById("emoji-toggle-btn"),
    newChatButton: document.getElementById("new-chat-btn"),
    newChatModal: document.getElementById("new-chat-modal"),
    newChatForm: document.getElementById("new-chat-form"),
    newChatPhone: document.getElementById("new-chat-phone"),
    newChatStatus: document.getElementById("new-chat-status"),
    closeModalButton: document.getElementById("close-modal-btn"),
    toastStack: document.getElementById("toast-stack"),
    callModalRoot: document.getElementById("call-modal-root"),
    themeToggle: document.getElementById("theme-toggle"),
    mobileBackButton: document.getElementById("mobile-back-btn"),
    selfAvatar: document.getElementById("self-avatar"),
    selfName: document.getElementById("self-name"),
    selfPhone: document.getElementById("self-phone"),
    selfStatus: document.getElementById("self-status"),
    profileMenuButton: document.getElementById("profile-menu-btn"),
    profilePanel: document.getElementById("profile-panel"),
    profilePanelAvatar: document.getElementById("profile-panel-avatar"),
    logoutButton: document.getElementById("logout-btn"),
    loginSplash: document.getElementById("login-splash"),
    loginSplashVideo: document.getElementById("login-splash-video"),
    sidebarTitle: document.getElementById("sidebar-title"),
    sidebarMoreButton: document.getElementById("sidebar-more-btn"),
    railChatsButton: document.getElementById("rail-chats-btn"),
    railCallsButton: document.getElementById("rail-calls-btn"),
    railStatusButton: document.getElementById("rail-status-btn"),
    mobileNav: document.getElementById("mobile-bottom-nav"),
    mobileNavButtons: document.querySelectorAll("#mobile-bottom-nav [data-mobile-tab]"),
    mobileThemeToggle: document.getElementById("mobile-theme-toggle"),
    storyStrip: null,
    storyViewer: null,
    storyViewerCloseButton: null,
    storyViewerAvatar: null,
    storyViewerTitle: null,
    storyViewerMeta: null,
    storyViewerBody: null,
    storyReplyInput: null,
    storySheet: null,
    storySheetActions: null,
    composerSubmitButton: document.querySelector('#composer button[type="submit"]'),
};

const state = {
    csrfToken: document.querySelector('meta[name="csrf-token"]')?.content || "",
    me: null,
    chats: new Map(),
    messages: new Map(),
    mediaCache: new Map(),
    activeChatId: null,
    socket: null,
    pendingFile: null,
    captureMode: "photo",
    captureFilter: "normal",
    captureFacingMode: "environment",
    captureFlashEnabled: false,
    captureTorchAvailable: false,
    captureStream: null,
    captureRecorder: null,
    captureChunks: [],
    captureFile: null,
    capturePreviewUrl: "",
    captureRecording: false,
    captureDiscardRecording: false,
    captureCanvas: null,
    captureCanvasStream: null,
    captureRenderId: null,
    typingState: new Map(),
    localTyping: false,
    localTypingTimer: null,
    socketConnected: false,
    chatFilter: "all",
    pinnedChatIds: new Set(),
    mutedChatIds: new Set(),
    drafts: new Map(),
    infoDrawerOpen: false,
    activeCall: null,
    peerConnection: null,
    localStream: null,
    remoteStream: null,
    pendingIceCandidates: [],
    callStartedAt: null,
    callTimerId: null,
    lastRealtimeError: "",
    connectionNoticeShown: false,
    connectWatchdogId: null,
    pollBootstrapTimer: null,
    pollMessagesTimer: null,
    pollingMode: false,
    lastPollingAt: null,
    callMenuOpen: false,
    profileMenuOpen: false,
    cameraMenuOpen: false,
    cameraCaptureMode: "photo",
    turnNoticeShown: false,
    sidebarView: "chats",
    callHistory: [],
    statusItems: [],
    storyItems: [],
    favoriteContactIds: new Set(),
    callModalType: null,
    callModalScreen: null,
    keypadValue: "",
    phoneSearchResult: null,
    phoneSearchLoading: false,
    phoneSearchTimer: null,
    phoneSearchToken: 0,
};

const STORAGE_KEYS = {
    pinnedChats: "wavechat-pinned-chats",
    mutedChats: "wavechat-muted-chats",
    drafts: "wavechat-drafts",
    chatFilter: "wavechat-chat-filter",
    callHistory: "wavechat-call-history",
    waveBotMessages: "wavechat-wavebot-messages",
    favoriteContacts: "wavechat-favorite-contacts",
};

const CHAT_FILTERS = new Set(["all", "unread", "online", "pinned"]);
const SIDEBAR_VIEWS = new Set(["chats", "calls", "status"]);
const CALL_TYPES = new Set(["voice", "video"]);
const SPECIAL_CHAT_IDS = {
    waveBot: -101,
};
const STORY_WINDOW_MS = 24 * 60 * 60 * 1000;
const DEFAULT_RTC_CONFIGURATION = {
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:stun1.l.google.com:19302" },
    ],
    iceTransportPolicy: "all",
};

const CAPTURE_FILTERS = [
    { id: "normal", label: "Normal", emoji: "😊", filter: "none" },
    { id: "vivid", label: "Vivid", emoji: "🐶", filter: "saturate(1.6) contrast(1.1)" },
    { id: "vintage", label: "Vintage", emoji: "🐱", filter: "sepia(0.55) contrast(1.1) brightness(1.05)" },
    { id: "cool", label: "Cool", emoji: "🐳", filter: "saturate(1.2) hue-rotate(190deg)" },
    { id: "warm", label: "Warm", emoji: "😍", filter: "saturate(1.35) contrast(1.1) brightness(1.05) hue-rotate(-12deg)" },
    { id: "bw", label: "B&W", emoji: "😎", filter: "grayscale(1) contrast(1.1)" },
    { id: "dramatic", label: "Dramatic", emoji: "😈", filter: "contrast(1.5) brightness(0.9) saturate(0.85)" },
    { id: "sunset", label: "Sunset", emoji: "😜", filter: "saturate(1.3) contrast(1.05) brightness(1.05) hue-rotate(-18deg) sepia(0.25)" },
    { id: "frost", label: "Frost", emoji: "🥶", filter: "brightness(1.15) saturate(0.85) hue-rotate(210deg)" },
];

function getRtcConfiguration() {
    const rawConfig = refs.chatApp?.dataset.rtcConfig;
    if (!rawConfig) {
        return DEFAULT_RTC_CONFIGURATION;
    }

    try {
        const parsed = JSON.parse(rawConfig);
        if (!parsed || !Array.isArray(parsed.iceServers) || !parsed.iceServers.length) {
            return DEFAULT_RTC_CONFIGURATION;
        }
        return {
            ...DEFAULT_RTC_CONFIGURATION,
            ...parsed,
        };
    } catch (_error) {
        return DEFAULT_RTC_CONFIGURATION;
    }
}

const RTC_CONFIGURATION = getRtcConfiguration();
const COMPOSER_ICON_SEND = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20 21 12 3 4l3.8 6.5L14 12l-7.2 1.5z" fill="currentColor"/></svg>';
const COMPOSER_ICON_MIC = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V22h2v-3.1A7 7 0 0 0 19 12z" fill="currentColor"/></svg>';
const MESSAGE_ACTION_ICON_COPY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 9h10v11H9zM5 5h10v2H7v10H5z" fill="currentColor"/></svg>';
const MESSAGE_ACTION_ICON_SAVE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10.3l3.6-3.6 1.4 1.4-6 6-6-6 1.4-1.4 3.6 3.6V3zM5 19h14v2H5z" fill="currentColor"/></svg>';
const MESSAGE_GROUP_GAP_MS = 5 * 60 * 1000;
const MOBILE_BREAKPOINT_PX = 920;
const mobileViewportQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX}px), (hover: none) and (pointer: coarse) and (max-width: 1100px)`);

function isMobileViewport() {
    return mobileViewportQuery.matches;
}

function syncResponsivePreview() {
    const previewMode = "mobile";

    if (refs.chatApp) {
        refs.chatApp.dataset.previewMode = previewMode;
        refs.chatApp.dataset.activeScreen = state.activeChatId ? "conversation" : "list";
    }

    document.body.classList.toggle("chat-focused", Boolean(state.activeChatId));
    updateMobileNav();
}
function showToast(message, tone = "info") {
    const toast = document.createElement("div");
    toast.className = `toast ${tone}`;
    toast.textContent = message;
    refs.toastStack.appendChild(toast);
    window.setTimeout(() => {
        toast.remove();
    }, 3200);
}

function setTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(theme);
    localStorage.setItem("wavechat-theme", theme);
}

function setChatMenuOpen(open) {
    state.chatMenuOpen = Boolean(open);
    if (refs.chatMenu) {
        refs.chatMenu.classList.toggle("hidden", !state.chatMenuOpen);
    }
}

function setCameraMenuOpen(open) {
    state.cameraMenuOpen = Boolean(open);
    if (refs.cameraMenu) {
        refs.cameraMenu.classList.toggle("hidden", !state.cameraMenuOpen);
    }
}

function setStorySheetOpen(open) {
    state.storySheetOpen = Boolean(open);
    if (refs.storySheet) {
        refs.storySheet.classList.toggle("hidden", !state.storySheetOpen);
    }
}

function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = String(value ?? "");
    return div.innerHTML;
}

function normalizePhoneDigits(value) {
    return String(value || "").replace(/\D/g, "");
}

function getSortedContacts() {
    return Array.from(state.chats.values())
        .filter((chat) => chat && !isVirtualChat(chat))
        .sort((left, right) => getChatSortValue(right) - getChatSortValue(left));
}

function formatCallRowTime(isoString) {
    if (!isoString) {
        return "";
    }
    const label = formatDayLabel(isoString);
    const time = new Date(isoString).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return `${label}, ${time}`;
}

function getCallDirectionIndicator(entry) {
    const outcome = String(entry?.outcome || "").toLowerCase();
    if (outcome === "missed" || outcome === "declined" || outcome === "failed") {
        return '<span class="call-direction missed">↓</span>';
    }
    if (entry?.direction === "outgoing") {
        return '<span class="call-direction outgoing">↑</span>';
    }
    return '<span class="call-direction incoming">↓</span>';
}

function resolveCallChatId(entry) {
    if (entry?.chatId) {
        return Number(entry.chatId);
    }
    const contacts = getSortedContacts();
    const digits = normalizePhoneDigits(entry?.phoneNumber || "");
    if (digits) {
        const match = contacts.find((chat) => normalizePhoneDigits(chat.counterpart?.phoneNumber || "").includes(digits));
        if (match) {
            return match.id;
        }
    }
    if (entry?.name) {
        const name = String(entry.name).toLowerCase();
        const match = contacts.find((chat) => getUserPrimaryText(chat.counterpart, "").toLowerCase().includes(name));
        if (match) {
            return match.id;
        }
    }
    return null;
}

function openCallModal(type, screen = null) {
    if (!refs.callModalRoot) {
        showToast("This panel is unavailable right now.", "error");
        return;
    }
    state.callModalType = type;
    state.callModalScreen = screen;
    refs.callModalRoot.innerHTML = buildCallModalMarkup(type, screen);
    refs.callModalRoot.classList.remove("hidden");
    refs.callModalRoot.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (type === "keypad") {
        state.keypadValue = "";
        updateKeypadDisplay();
    }
}

function closeCallModal() {
    if (!refs.callModalRoot) {
        return;
    }
    refs.callModalRoot.classList.add("hidden");
    refs.callModalRoot.setAttribute("aria-hidden", "true");
    refs.callModalRoot.innerHTML = "";
    state.callModalType = null;
    state.callModalScreen = null;
    document.body.classList.remove("modal-open");
}

function buildCallModalMarkup(type, screen) {
    switch (type) {
        case "contact":
            return buildContactSelectorMarkup();
        case "schedule":
            return buildScheduleCallMarkup();
        case "keypad":
            return buildKeypadMarkup();
        case "favorites":
            return buildFavoritesMarkup(screen);
        default:
            return "";
    }
}

function buildContactSelectorMarkup() {
    const contacts = getSortedContacts();
    const frequent = contacts.slice(0, 6);
    const listMarkup = frequent.length
        ? frequent.map((chat) => {
            const name = getUserPrimaryText(chat.counterpart, "Contact");
            const preview = getChatPreviewText(chat);
            const phone = chat.counterpart?.phoneNumber || "";
            return `
                <button type="button" class="call-contact-row" data-call-contact-id="${chat.id}" data-call-type="voice" data-contact-search="${escapeHtml(`${name} ${phone}`)}">
                    <span class="avatar call-contact-avatar" style="background:${chat.counterpart?.avatarColor || "#16a34a"}">${createAvatarLabel(name)}</span>
                    <span class="call-contact-body">
                        <strong>${escapeHtml(name)}</strong>
                        <span>${escapeHtml(preview || "")}</span>
                    </span>
                    <span class="call-contact-radio"></span>
                </button>
            `;
        }).join("")
        : '<div class="call-modal-empty">No contacts yet.</div>';

    return `
        <div class="call-modal-overlay">
            <div class="call-modal-card call-modal-contact">
                <header class="call-modal-header">
                    <button type="button" class="call-modal-icon" data-call-modal-close aria-label="Close">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </button>
                    <input type="text" class="call-modal-search" placeholder="Search name or number..." data-call-modal-search>
                    <button type="button" class="call-modal-icon" aria-label="Grid">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" fill="currentColor"/></svg>
                    </button>
                </header>
                <div class="call-modal-hint">Add up to 31 people</div>
                <div class="call-modal-quick">
                    <button type="button" class="call-modal-quick-item" data-call-modal-toast="New call link created">
                        <span class="call-modal-quick-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4 4 0 0 0 6 0l2-2a4 4 0 0 0-6-6l-1 1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                        </span>
                        <span>New call link</span>
                    </button>
                    <button type="button" class="call-modal-quick-item" data-call-modal-toast="Add contact coming soon">
                        <span class="call-modal-quick-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1m2-7v6m-3-3h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                        </span>
                        <span>New contact</span>
                    </button>
                </div>
                <div class="call-modal-section">
                    <div class="call-modal-section-title">Frequently contacted</div>
                    <div class="call-modal-list">
                        ${listMarkup}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function buildScheduleCallMarkup() {
    const now = new Date();
    const dateValue = now.toISOString().slice(0, 10);
    const timeValue = now.toTimeString().slice(0, 5);
    const contacts = getSortedContacts().slice(0, 10);
    const contactRows = contacts.map((chat) => {
        const name = getUserPrimaryText(chat.counterpart, "Contact");
        return `
            <label class="call-schedule-contact">
                <input type="checkbox" data-schedule-contact value="${chat.id}">
                <span class="avatar" style="background:${chat.counterpart?.avatarColor || "#16a34a"}">${createAvatarLabel(name)}</span>
                <span>${escapeHtml(name)}</span>
            </label>
        `;
    }).join("");

    return `
        <div class="call-modal-overlay">
            <div class="call-modal-card call-modal-schedule">
                <header class="call-modal-header">
                    <button type="button" class="call-modal-icon" data-call-modal-close aria-label="Close">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </button>
                    <h2>Schedule call</h2>
                    <span></span>
                </header>
                <div class="call-modal-body">
                    <label class="call-field">
                        <span>Title</span>
                        <input type="text" value="${escapeHtml(state.me?.displayName || "WaveChat")} call" data-schedule-title>
                    </label>
                    <div class="call-field-row">
                        <label class="call-field">
                            <span>Date</span>
                            <input type="date" value="${dateValue}" data-schedule-date>
                        </label>
                        <label class="call-field">
                            <span>Time</span>
                            <input type="time" value="${timeValue}" data-schedule-time>
                        </label>
                    </div>
                    <label class="call-field">
                        <span>Call type</span>
                        <select data-schedule-type>
                            <option value="voice">Voice</option>
                            <option value="video" selected>Video</option>
                        </select>
                    </label>
                    <label class="call-field">
                        <span>Reminder</span>
                        <select data-schedule-reminder>
                            <option value="0">At time of event</option>
                            <option value="5">5 minutes before</option>
                            <option value="15" selected>15 minutes before</option>
                            <option value="30">30 minutes before</option>
                        </select>
                    </label>
                    <div class="call-modal-section-title">Participants</div>
                    <div class="call-schedule-contacts">
                        ${contactRows || '<div class="call-modal-empty">Add participants from your chats.</div>'}
                    </div>
                </div>
                <div class="call-modal-footer">
                    <button type="button" class="primary-btn" data-schedule-submit>Schedule</button>
                </div>
            </div>
        </div>
    `;
}

function buildKeypadMarkup() {
    const keys = [
        ["1", ""], ["2", "ABC"], ["3", "DEF"],
        ["4", "GHI"], ["5", "JKL"], ["6", "MNO"],
        ["7", "PQRS"], ["8", "TUV"], ["9", "WXYZ"],
        ["*", ""], ["0", "+"], ["#", ""],
    ];
    const keyButtons = keys.map(([digit, letters]) => `
        <button type="button" class="keypad-key" data-keypad-digit="${digit}">
            <span>${digit}</span>
            ${letters ? `<small>${letters}</small>` : ""}
        </button>
    `).join("");

    return `
        <div class="call-modal-overlay">
            <div class="call-modal-card call-modal-keypad">
                <header class="call-modal-header">
                    <button type="button" class="call-modal-icon" data-call-modal-close aria-label="Close">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </button>
                    <h2>Keypad</h2>
                    <button type="button" class="call-modal-icon" data-call-modal-toast="Add contact coming soon" aria-label="Add contact">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1m2-7v6m-3-3h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </button>
                </header>
                <div class="call-modal-body keypad-body">
                    <div class="keypad-display" id="keypad-display"></div>
                    <div class="keypad-match" id="keypad-match"></div>
                    <div class="keypad-grid">${keyButtons}</div>
                    <div class="keypad-actions">
                        <button type="button" class="keypad-action ghost" data-keypad-chat>Chat</button>
                        <button type="button" class="keypad-action primary" data-keypad-call>Call</button>
                        <button type="button" class="keypad-action ghost" data-keypad-delete aria-label="Delete">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12M9 7V5h6v2m-8 0v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function buildFavoritesMarkup(screen) {
    const mode = screen === "add" ? "add" : "grid";
    const contacts = getSortedContacts();
    const favorites = contacts.filter((chat) => isFavoriteContact(chat.id));

    if (mode === "add") {
        const addRows = contacts.map((chat) => {
            const name = getUserPrimaryText(chat.counterpart, "Contact");
            const isFav = isFavoriteContact(chat.id);
            return `
                <button type="button" class="favorite-add-row" data-favorite-add-contact="${chat.id}" ${isFav ? "disabled" : ""}>
                    <span class="avatar" style="background:${chat.counterpart?.avatarColor || "#16a34a"}">${createAvatarLabel(name)}</span>
                    <span class="favorite-add-name">${escapeHtml(name)}</span>
                    ${isFav ? '<span class="favorite-added">Added</span>' : '<span class="favorite-add-plus">+</span>'}
                </button>
            `;
        }).join("");
        return `
            <div class="call-modal-overlay">
                <div class="call-modal-card call-modal-favorites">
                    <header class="call-modal-header">
                        <button type="button" class="call-modal-icon" data-call-modal-back="favorites" aria-label="Back">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6 9 12l6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                        </button>
                        <h2>Add to Favorites</h2>
                        <span></span>
                    </header>
                    <div class="call-modal-body favorite-add-list">
                        ${addRows || '<div class="call-modal-empty">No contacts available.</div>'}
                    </div>
                </div>
            </div>
        `;
    }

    const cards = favorites.map((chat) => {
        const name = getUserPrimaryText(chat.counterpart, "Contact");
        return `
            <div class="favorite-card">
                <div class="favorite-avatar-wrap">
                    <span class="avatar" style="background:${chat.counterpart?.avatarColor || "#16a34a"}">${createAvatarLabel(name)}</span>
                    <button type="button" class="favorite-remove" data-favorite-remove="${chat.id}" aria-label="Remove">×</button>
                </div>
                <span class="favorite-name">${escapeHtml(name.split(" ")[0] || name)}</span>
                <div class="favorite-actions">
                    <button type="button" class="favorite-call-btn" data-call-contact-id="${chat.id}" data-call-type="voice" aria-label="Voice call">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.3 21.2 2.8 13.7 2.8 4.4 2.8 3.7 3.3 3.2 4 3.2h3.2c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2 2.2z" fill="currentColor"/></svg>
                    </button>
                    <button type="button" class="favorite-call-btn" data-call-contact-id="${chat.id}" data-call-type="video" aria-label="Video call">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 10.5V7a2 2 0 0 0-2-2H5A2 2 0 0 0 3 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5L22 18V6z" fill="currentColor"/></svg>
                    </button>
                </div>
            </div>
        `;
    }).join("");

    return `
        <div class="call-modal-overlay">
            <div class="call-modal-card call-modal-favorites">
                <header class="call-modal-header">
                    <button type="button" class="call-modal-icon" data-call-modal-close aria-label="Close">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </button>
                    <h2>Favorites</h2>
                    <button type="button" class="call-modal-icon" data-favorite-add aria-label="Add favorite">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </button>
                </header>
                <div class="call-modal-body favorite-grid">
                    ${cards || '<div class="call-modal-empty">No favorites yet. Tap + to add.</div>'}
                    ${cards ? "" : '<button type="button" class="favorite-add-cta" data-favorite-add>Add favorites</button>'}
                </div>
            </div>
        </div>
    `;
}

function findKeypadMatch(value) {
    if (!value || value.length < 3) {
        return null;
    }
    const digits = normalizePhoneDigits(value);
    return getSortedContacts().find((chat) => {
        const nameMatch = getUserPrimaryText(chat.counterpart, "").toLowerCase().includes(value.toLowerCase());
        if (nameMatch) {
            return true;
        }
        const phone = normalizePhoneDigits(chat.counterpart?.phoneNumber || "");
        return digits && phone.includes(digits);
    }) || null;
}

function updateKeypadDisplay() {
    if (!refs.callModalRoot) {
        return;
    }
    const display = refs.callModalRoot.querySelector("#keypad-display");
    if (display) {
        display.textContent = state.keypadValue;
    }
    const matchSlot = refs.callModalRoot.querySelector("#keypad-match");
    if (!matchSlot) {
        return;
    }
    const match = findKeypadMatch(state.keypadValue);
    if (!match) {
        matchSlot.innerHTML = state.keypadValue ? '<span class="keypad-hint">Enter number to call</span>' : "";
        matchSlot.removeAttribute("data-chat-id");
        return;
    }
    const name = getUserPrimaryText(match.counterpart, "Contact");
    matchSlot.dataset.chatId = String(match.id);
    matchSlot.innerHTML = `
        <span class="avatar" style="background:${match.counterpart?.avatarColor || "#16a34a"}">${createAvatarLabel(name)}</span>
        <span class="keypad-match-name">${escapeHtml(name)}</span>
    `;
}

function filterCallModalContacts(query) {
    if (!refs.callModalRoot) {
        return;
    }
    const normalized = String(query || "").trim().toLowerCase();
    refs.callModalRoot.querySelectorAll("[data-contact-search]").forEach((row) => {
        const value = String(row.dataset.contactSearch || "").toLowerCase();
        row.classList.toggle("hidden", normalized && !value.includes(normalized));
    });
}

function exportActiveChat() {
    const chat = state.chats.get(state.activeChatId);
    if (!chat) {
        showToast("Choose a chat first.", "error");
        return;
    }
    const messages = state.messages.get(chat.id) || [];
    const lines = messages.map((message) => {
        const sender = message.fromSelf ? "You" : getUserPrimaryText(chat.counterpart, "Contact");
        const time = message.createdAt ? new Date(message.createdAt).toLocaleString() : "";
        const body = message.messageType === "media" ? (message.caption || message.fileName || "Media") : (message.text || "");
        return `[${time}] ${sender}: ${body}`;
    });
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `wavechat-${chat.id}-export.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
    showToast("Chat exported.");
}

function updateComposerSubmitButton() {
    if (!refs.composerSubmitButton) {
        return;
    }
    const hasPayload = Boolean(refs.messageInput?.value.trim() || state.pendingFile);
    const label = hasPayload ? "Send" : "Voice note";
    refs.composerSubmitButton.dataset.mode = hasPayload ? "send" : "mic";
    refs.composerSubmitButton.title = label;
    refs.composerSubmitButton.setAttribute("aria-label", label);
    refs.composerSubmitButton.innerHTML = (hasPayload ? COMPOSER_ICON_SEND : COMPOSER_ICON_MIC) + `<span class="sr-only">${label}</span>`;
}

function safeParseStorage(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (_error) {
        return fallback;
    }
}

function loadUiState() {
    const savedFilter = localStorage.getItem(STORAGE_KEYS.chatFilter);
    state.chatFilter = CHAT_FILTERS.has(savedFilter) ? savedFilter : "all";

    const pinned = safeParseStorage(STORAGE_KEYS.pinnedChats, []);
    state.pinnedChatIds = new Set(Array.isArray(pinned) ? pinned.map(String) : []);

    const muted = safeParseStorage(STORAGE_KEYS.mutedChats, []);
    state.mutedChatIds = new Set(Array.isArray(muted) ? muted.map(String) : []);

    const drafts = safeParseStorage(STORAGE_KEYS.drafts, {});
    const entries = Object.entries(drafts).map(([chatId, text]) => [String(chatId), typeof text === "string" ? text : ""]);
    state.drafts = new Map(entries.filter(([, text]) => text));

    const callHistory = safeParseStorage(STORAGE_KEYS.callHistory, []);
    state.callHistory = normalizeCallHistoryEntries(Array.isArray(callHistory) ? callHistory : []);

    const favorites = safeParseStorage(STORAGE_KEYS.favoriteContacts, []);
    state.favoriteContactIds = new Set(Array.isArray(favorites) ? favorites.map(String) : []);
    updateFilterChips();
}

function persistPinnedChats() {
    localStorage.setItem(STORAGE_KEYS.pinnedChats, JSON.stringify(Array.from(state.pinnedChatIds)));
}

function persistMutedChats() {
    localStorage.setItem(STORAGE_KEYS.mutedChats, JSON.stringify(Array.from(state.mutedChatIds)));
}

function persistDrafts() {
    localStorage.setItem(STORAGE_KEYS.drafts, JSON.stringify(Object.fromEntries(state.drafts)));
}

function persistCallHistory() {
    localStorage.setItem(STORAGE_KEYS.callHistory, JSON.stringify(state.callHistory.slice(0, 60)));
}

function persistFavoriteContacts() {
    localStorage.setItem(STORAGE_KEYS.favoriteContacts, JSON.stringify(Array.from(state.favoriteContactIds)));
}

function isFavoriteContact(chatId) {
    return state.favoriteContactIds.has(String(chatId));
}

function toggleFavoriteContact(chatId) {
    const key = String(chatId);
    if (state.favoriteContactIds.has(key)) {
        state.favoriteContactIds.delete(key);
        showToast("Removed from favorites.");
    } else {
        state.favoriteContactIds.add(key);
        showToast("Added to favorites.");
    }
    persistFavoriteContacts();
}

function isChatPinned(chatId) {
    return state.pinnedChatIds.has(String(chatId));
}

function isChatMuted(chatId) {
    return state.mutedChatIds.has(String(chatId));
}

function togglePinnedChat(chatId) {
    const key = String(chatId);
    if (state.pinnedChatIds.has(key)) {
        state.pinnedChatIds.delete(key);
        showToast("Chat removed from pinned.");
    } else {
        state.pinnedChatIds.add(key);
        showToast("Chat pinned to the top.");
    }
    persistPinnedChats();
    refreshChatUi();
}

function toggleChatMuted(chatId) {
    const key = String(chatId);
    if (state.mutedChatIds.has(key)) {
        state.mutedChatIds.delete(key);
        showToast("Notifications enabled for this chat.");
    } else {
        state.mutedChatIds.add(key);
        showToast("Notifications muted for this chat.");
    }
    persistMutedChats();
    refreshChatUi();
}

function getDraftText(chatId) {
    return state.drafts.get(String(chatId)) || "";
}

function setDraftText(chatId, text) {
    if (!chatId) {
        return;
    }
    const normalized = String(text || "").slice(0, 4000);
    if (normalized.trim()) {
        state.drafts.set(String(chatId), normalized);
    } else {
        state.drafts.delete(String(chatId));
    }
    persistDrafts();
    renderChatList();
    updateInfoDrawer(state.chats.get(state.activeChatId));
}

function setChatFilter(filter) {
    if (!CHAT_FILTERS.has(filter)) {
        return;
    }
    state.chatFilter = filter;
    localStorage.setItem(STORAGE_KEYS.chatFilter, filter);
    updateFilterChips();
    renderChatList();
}

function updateFilterChips() {
    refs.chatFilters?.querySelectorAll("[data-filter]").forEach((button) => {
        const active = button.dataset.filter === state.chatFilter;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

function sameCalendarDay(left, right) {
    return left.getFullYear() === right.getFullYear()
        && left.getMonth() === right.getMonth()
        && left.getDate() === right.getDate();
}

function formatDayLabel(isoString) {
    const value = new Date(isoString);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (sameCalendarDay(value, today)) {
        return "Today";
    }
    if (sameCalendarDay(value, yesterday)) {
        return "Yesterday";
    }
    return value.toLocaleDateString([], {
        weekday: "short",
        month: "short",
        day: "numeric",
    });
}

function formatChatListTime(isoString) {
    if (!isoString) {
        return "";
    }
    const value = new Date(isoString);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (isMobileViewport()) {
        const quickSection = document.createElement("section");
        quickSection.className = "call-quick-actions";
        const quickRow = document.createElement("div");
        quickRow.className = "call-quick-row";
        const quickActions = [
            {
                id: "contact",
                label: "Call",
                icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.3 21.2 2.8 13.7 2.8 4.4 2.8 3.7 3.3 3.2 4 3.2h3.2c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2 2.2z" fill="currentColor"/></svg>',
            },
            {
                id: "schedule",
                label: "Schedule",
                icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4v3M18 4v3M4 9h16M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
            },
            {
                id: "keypad",
                label: "Keypad",
                icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h4v4H4zM10 4h4v4h-4zM16 4h4v4h-4zM4 10h4v4H4zM10 10h4v4h-4zM16 10h4v4h-4zM4 16h4v4H4zM10 16h4v4h-4zM16 16h4v4h-4z" fill="currentColor"/></svg>',
            },
            {
                id: "favorites",
                label: "Favorites",
                icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 20.5-1.4-1.3C5 14 2 11.3 2 7.9A3.9 3.9 0 0 1 5.9 4c1.5 0 2.9.7 3.7 1.9C10.4 4.7 11.8 4 13.3 4A3.9 3.9 0 0 1 17.2 7.9c0 3.4-3 6.1-8.6 11.3z" fill="currentColor"/></svg>',
            },
        ];
        quickActions.forEach((action) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "call-quick-item";
            button.dataset.callAction = action.id;
            button.innerHTML = `
                <span class="call-quick-icon">${action.icon}</span>
                <span>${action.label}</span>
            `;
            quickRow.appendChild(button);
        });
        quickSection.appendChild(quickRow);
        refs.chatList.appendChild(quickSection);

        const historySection = document.createElement("section");
        historySection.className = "call-history-block";
        historySection.innerHTML = '<div class="call-history-header">Recent</div>';
        const historyList = document.createElement("div");
        historyList.className = "call-history-list";
        if (!historyItems.length) {
            const empty = document.createElement("div");
            empty.className = "sidebar-empty-state";
            empty.textContent = query ? "No calls match this search." : "No recent calls yet.";
            historyList.appendChild(empty);
        } else {
            historyItems.forEach((entry) => {
                const row = document.createElement("div");
                row.className = "call-history-row";
                const chatId = resolveCallChatId(entry);
                if (chatId) {
                    row.dataset.callChatId = String(chatId);
                }
                const callIcon = entry.callType === "video"
                    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 10.5V7a2 2 0 0 0-2-2H5A2 2 0 0 0 3 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5L22 18V6z" fill="currentColor"/></svg>'
                    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.3 21.2 2.8 13.7 2.8 4.4 2.8 3.7 3.3 3.2 4 3.2h3.2c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2 2.2z" fill="currentColor"/></svg>';
                row.innerHTML = `
                    <span class="avatar call-history-avatar" style="background:${entry.avatarColor || "#16a34a"}">${createAvatarLabel(entry.name || "C")}</span>
                    <span class="call-history-info">
                        <span class="call-history-top"><strong>${escapeHtml(entry.name || "Contact")}</strong></span>
                        <span class="call-history-meta">${getCallDirectionIndicator(entry)}<span>${formatCallRowTime(entry.createdAt)}</span></span>
                    </span>
                    <button type="button" class="call-history-call-btn" data-call-contact-id="${chatId || ""}" data-call-type="${entry.callType}" ${chatId ? "" : "disabled"}>${callIcon}</button>
                `;
                historyList.appendChild(row);
            });
        }
        historySection.appendChild(historyList);
        refs.chatList.appendChild(historySection);
        return;
    }
    const nextMode = mode === "video" ? "video" : "photo";
    state.cameraCaptureMode = nextMode;
    void openCaptureModal(nextMode);
    setCameraMenuOpen(false);
}

function getChatSortValue(chat) {
    const stamp = chat?.lastMessage?.createdAt || chat?.updatedAt;
    return stamp ? new Date(stamp).getTime() : 0;
}

function isVirtualChat(chat) {
    return Boolean(chat?.isVirtual);
}

function isWaveBotChat(chatOrId) {
    if (typeof chatOrId === "number") {
        return chatOrId === SPECIAL_CHAT_IDS.waveBot;
    }
    return Number(chatOrId?.id) === SPECIAL_CHAT_IDS.waveBot;
}

function createLocalMessageId(prefix = "local") {
    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}

function loadWaveBotMessages() {
    const stored = safeParseStorage(STORAGE_KEYS.waveBotMessages, []);
    return Array.isArray(stored) ? stored : [];
}

function persistWaveBotMessages() {
    const messages = getChatMessages(SPECIAL_CHAT_IDS.waveBot).map((message) => ({
        id: message.id,
        chatId: message.chatId,
        clientMessageId: message.clientMessageId,
        kind: message.kind,
        text: message.text ?? null,
        caption: message.caption ?? null,
        mimeType: message.mimeType ?? null,
        fileName: message.fileName ?? null,
        createdAt: message.createdAt,
        fromSelf: Boolean(message.fromSelf),
        senderId: message.senderId ?? null,
        recipientId: message.recipientId ?? null,
        status: message.status || (message.fromSelf ? "sent" : "delivered"),
        deliveredAt: message.deliveredAt ?? null,
        readAt: message.readAt ?? null,
        plain: buildPlainMessagePayload(message),
    }));
    localStorage.setItem(STORAGE_KEYS.waveBotMessages, JSON.stringify(messages));
}

function createWaveBotSeedMessage() {
    const createdAt = new Date().toISOString();
    return {
        id: Date.now(),
        chatId: SPECIAL_CHAT_IDS.waveBot,
        clientMessageId: createLocalMessageId("wavebot-seed"),
        kind: "text",
        text: "WaveBot is ready. Ask for stories, communities, privacy tips, media ideas, or /help.",
        ciphertext: "WaveBot is ready. Ask for stories, communities, privacy tips, media ideas, or /help.",
        plain: {
            messageType: "text",
            text: "WaveBot is ready. Ask for stories, communities, privacy tips, media ideas, or /help.",
        },
        createdAt,
        fromSelf: false,
        senderId: null,
        recipientId: state.me?.id || null,
        status: "delivered",
        deliveredAt: createdAt,
        readAt: createdAt,
    };
}

function ensureWaveBotChat() {
    const existingMessages = loadWaveBotMessages();
    const normalizedMessages = existingMessages.length ? existingMessages : [createWaveBotSeedMessage()];
    if (!state.messages.has(SPECIAL_CHAT_IDS.waveBot) || !state.messages.get(SPECIAL_CHAT_IDS.waveBot)?.length) {
        state.messages.set(SPECIAL_CHAT_IDS.waveBot, normalizedMessages.map((message) => ({
            ...message,
            chatId: SPECIAL_CHAT_IDS.waveBot,
            plain: message.plain || buildPlainMessagePayload(message),
        })));
    }
    if (!existingMessages.length) {
        persistWaveBotMessages();
    }

    const botMessages = getChatMessages(SPECIAL_CHAT_IDS.waveBot);
    const lastMessage = botMessages[botMessages.length - 1] || null;
    const unreadCount = botMessages.filter((message) => !message.fromSelf && !message.readAt).length;
    state.chats.set(SPECIAL_CHAT_IDS.waveBot, {
        id: SPECIAL_CHAT_IDS.waveBot,
        isVirtual: true,
        virtualKind: "bot",
        isGroup: false,
        title: null,
        updatedAt: lastMessage?.createdAt || new Date().toISOString(),
        counterpart: {
            id: "wavebot",
            displayName: "WaveBot",
            phoneNumber: "WaveBot",
            avatarColor: "#5C6BC0",
            isOnline: true,
            lastSeenAt: new Date().toISOString(),
            publicKeyFingerprint: null,
        },
        lastMessage,
        unreadCount,
    });
}

function syncWaveBotChatMeta() {
    const chat = state.chats.get(SPECIAL_CHAT_IDS.waveBot);
    if (!chat) {
        return;
    }
    const messages = getChatMessages(SPECIAL_CHAT_IDS.waveBot);
    const lastMessage = messages[messages.length - 1] || null;
    chat.lastMessage = lastMessage;
    chat.updatedAt = lastMessage?.createdAt || chat.updatedAt;
    chat.unreadCount = messages.filter((message) => !message.fromSelf && !message.readAt).length;
    state.chats.set(SPECIAL_CHAT_IDS.waveBot, chat);
    persistWaveBotMessages();
}

function buildWaveBotReply(text, payload = {}) {
    const input = String(text || "").trim().toLowerCase();
    if (!input || input === "/help") {
        return "WaveBot can help with Stories, privacy ideas, community launches, media prompts, and smart WaveChat shortcuts.";
    }
    if (input.includes("story") || input.includes("status") || input.includes("snap") || input.includes("instagram")) {
        return "Use the new story strip to keep quick visual updates alive in WaveChat. Share photos or short clips, then jump back into chat instantly.";
    }
    if (input.includes("group") || input.includes("community") || input.includes("telegram") || input.includes("channel")) {
        return "WaveChat is now leaning into community-ready UX. The next backend phase would be channels, large groups, and moderator tools.";
    }
    if (input.includes("privacy") || input.includes("secure") || input.includes("whatsapp") || input.includes("disappear")) {
        return "WaveChat stays clean and direct like everyday chat apps. We can layer in disappearing mode, privacy toggles, and safer media controls next.";
    }
    if (payload.kind === "media") {
        return "Nice share. WaveChat can turn media-heavy chats into stories, quick updates, and richer conversation moments.";
    }
    if (input.includes("bot") || input.includes("automation")) {
        return "WaveBot is your built-in helper chat. We can expand this into reminders, workflow commands, and assistant actions next.";
    }
    return "WaveBot heard you. Right now I can guide Stories, communities, privacy ideas, and media-first chat flows for WaveChat.";
}

async function sendWaveBotTextMessage(text) {
    const chat = state.chats.get(SPECIAL_CHAT_IDS.waveBot);
    const createdAt = new Date().toISOString();
    const outgoing = {
        id: Date.now(),
        chatId: SPECIAL_CHAT_IDS.waveBot,
        clientMessageId: createLocalMessageId("wavebot-user"),
        kind: "text",
        text,
        ciphertext: text,
        plain: { messageType: "text", text },
        createdAt,
        fromSelf: true,
        senderId: state.me?.id || null,
        recipientId: null,
        status: "read",
        deliveredAt: createdAt,
        readAt: createdAt,
    };
    await applySentMessage(outgoing);
    syncWaveBotChatMeta();

    window.setTimeout(async () => {
        const replyText = buildWaveBotReply(text, { kind: "text" });
        const replyAt = new Date().toISOString();
        upsertMessage({
            id: Date.now() + 1,
            chatId: SPECIAL_CHAT_IDS.waveBot,
            clientMessageId: createLocalMessageId("wavebot-reply"),
            kind: "text",
            text: replyText,
            ciphertext: replyText,
            plain: { messageType: "text", text: replyText },
            createdAt: replyAt,
            fromSelf: false,
            senderId: null,
            recipientId: state.me?.id || null,
            status: "delivered",
            deliveredAt: replyAt,
            readAt: state.activeChatId === SPECIAL_CHAT_IDS.waveBot ? replyAt : null,
        }, { suppressUnread: state.activeChatId === SPECIAL_CHAT_IDS.waveBot });
        syncWaveBotChatMeta();
        renderChatList();
        if (state.activeChatId === SPECIAL_CHAT_IDS.waveBot) {
            await renderMessages();
            scrollToBottom();
            await markActiveChatRead();
            updateConversationHeader(chat);
        }
    }, 500);
}

async function sendWaveBotMediaMessage(file, caption) {
    const createdAt = new Date().toISOString();
    const mimeType = file?.type || "application/octet-stream";
    const mediaUrl = URL.createObjectURL(file);
    const outgoing = {
        id: Date.now(),
        chatId: SPECIAL_CHAT_IDS.waveBot,
        clientMessageId: createLocalMessageId("wavebot-media"),
        kind: "media",
        caption: caption || "",
        mimeType,
        fileName: file?.name || "attachment",
        fileSize: file?.size || null,
        mediaUrl,
        plain: {
            messageType: "media",
            caption: caption || "",
            mimeType,
            fileName: file?.name || "attachment",
            fileSize: file?.size || null,
        },
        createdAt,
        fromSelf: true,
        senderId: state.me?.id || null,
        recipientId: null,
        status: "read",
        deliveredAt: createdAt,
        readAt: createdAt,
    };
    state.mediaCache.set(outgoing.id, { blob: file, url: mediaUrl });
    await applySentMessage(outgoing);
    syncWaveBotChatMeta();

    window.setTimeout(async () => {
        const replyText = buildWaveBotReply(caption || file?.name || "", { kind: "media" });
        const replyAt = new Date().toISOString();
        upsertMessage({
            id: Date.now() + 2,
            chatId: SPECIAL_CHAT_IDS.waveBot,
            clientMessageId: createLocalMessageId("wavebot-media-reply"),
            kind: "text",
            text: replyText,
            ciphertext: replyText,
            plain: { messageType: "text", text: replyText },
            createdAt: replyAt,
            fromSelf: false,
            senderId: null,
            recipientId: state.me?.id || null,
            status: "delivered",
            deliveredAt: replyAt,
            readAt: state.activeChatId === SPECIAL_CHAT_IDS.waveBot ? replyAt : null,
        }, { suppressUnread: state.activeChatId === SPECIAL_CHAT_IDS.waveBot });
        syncWaveBotChatMeta();
        renderChatList();
        if (state.activeChatId === SPECIAL_CHAT_IDS.waveBot) {
            await renderMessages();
            scrollToBottom();
            await markActiveChatRead();
        }
    }, 650);
}

function ensureStoryShell() {
    if (!refs.storyStrip) {
        const sidebarTools = document.querySelector('.sidebar-tools');
        const chatFilters = refs.chatFilters;
        if (sidebarTools && chatFilters) {
            const strip = document.createElement('section');
            strip.className = 'story-strip';
            strip.id = 'story-strip';
            strip.setAttribute('aria-label', 'Wave stories');
            chatFilters.parentNode.insertBefore(strip, chatFilters);
            refs.storyStrip = strip;
        }
    }

    if (refs.storyStrip && refs.storyStrip.dataset.bound !== '1') {
        refs.storyStrip.dataset.bound = '1';
        refs.storyStrip.addEventListener('click', (event) => {
            const storyButton = event.target.closest('[data-story-id]');
            if (storyButton) {
                openStoryViewer(storyButton.dataset.storyId);
            }
        });
    }

    if (!refs.storyViewer) {
        const viewer = document.createElement('div');
        viewer.className = 'story-viewer hidden';
        viewer.id = 'story-viewer';
        viewer.innerHTML = `
            <div class="story-viewer-backdrop" data-story-close="true"></div>
            <div class="story-viewer-card">
                <div class="story-viewer-progress"><span></span></div>
                <div class="story-viewer-head">
                    <button type="button" class="story-viewer-close" aria-label="Close story" data-story-close="true">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </button>
                    <div class="story-viewer-meta-row">
                        <div class="avatar story-viewer-avatar">W</div>
                        <div class="story-viewer-meta-group">
                            <strong class="story-viewer-title">Wave story</strong>
                            <span class="story-viewer-meta">Just now</span>
                        </div>
                    </div>
                </div>
                <div class="story-viewer-body"></div>
                <div class="story-viewer-footer">
                    <input type="text" class="story-reply-input" placeholder="Reply to story..." aria-label="Reply to story">
                    <button type="button" class="story-reply-btn" aria-label="React">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 4.6-7 9-7 9z" fill="currentColor"/></svg>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(viewer);
        refs.storyViewer = viewer;
        refs.storyViewerCloseButton = viewer.querySelector('.story-viewer-close');
        refs.storyViewerAvatar = viewer.querySelector('.story-viewer-avatar');
        refs.storyViewerTitle = viewer.querySelector('.story-viewer-title');
        refs.storyViewerMeta = viewer.querySelector('.story-viewer-meta');
        refs.storyViewerBody = viewer.querySelector('.story-viewer-body');
        refs.storyReplyInput = viewer.querySelector('.story-reply-input');

        refs.storyViewer.addEventListener('click', (event) => {
            if (event.target.closest('[data-story-close="true"]')) {
                closeStoryViewer();
            }
        });
    }

    if (!refs.storySheet) {
        const sheet = document.createElement('div');
        sheet.className = 'story-sheet hidden';
        sheet.id = 'story-sheet';
        sheet.innerHTML = `
            <div class="story-sheet-backdrop" data-story-sheet-close="true"></div>
            <div class="story-sheet-card">
                <div class="story-sheet-head">
                    <strong>Add to Story</strong>
                    <button type="button" class="story-sheet-close" aria-label="Close" data-story-sheet-close="true">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </button>
                </div>
                <button type="button" class="story-sheet-option" data-story-sheet-action="photo">
                    <span class="story-sheet-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="m4 15 4-4 3 3 5-5 4 4" fill="none" stroke="currentColor" stroke-width="2"/></svg>
                    </span>
                    <span class="story-sheet-copy">
                        <strong>Photo</strong>
                        <span>Take or upload a photo</span>
                    </span>
                </button>
                <button type="button" class="story-sheet-option" data-story-sheet-action="video">
                    <span class="story-sheet-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 10.5V7a2 2 0 0 0-2-2H5A2 2 0 0 0 3 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5L22 18V6z" fill="currentColor"/></svg>
                    </span>
                    <span class="story-sheet-copy">
                        <strong>Video</strong>
                        <span>Record or upload a video</span>
                    </span>
                </button>
            </div>
        `;
        document.body.appendChild(sheet);
        refs.storySheet = sheet;
        refs.storySheetActions = sheet.querySelectorAll('[data-story-sheet-action]');
        sheet.addEventListener('click', (event) => {
            if (event.target.closest('[data-story-sheet-close="true"]')) {
                setStorySheetOpen(false);
                return;
            }
            const actionButton = event.target.closest('[data-story-sheet-action]');
            if (!actionButton) {
                return;
            }
            const action = actionButton.dataset.storySheetAction;
            setStorySheetOpen(false);
            if (action === 'photo') {
                launchCameraCapture('photo');
            } else if (action === 'video') {
                launchCameraCapture('video');
            }
        });
    }
}

function normalizeCallHistoryEntries(entries) {
    const byKey = new Map();
    (Array.isArray(entries) ? entries : []).forEach((entry) => {
        if (!entry) {
            return;
        }
        const normalized = {
            id: entry.id ?? entry.callId ?? createLocalMessageId("call"),
            callId: entry.callId || null,
            chatId: entry.chatId ? Number(entry.chatId) : null,
            callType: entry.callType === "video" ? "video" : "voice",
            direction: entry.direction === "incoming" ? "incoming" : "outgoing",
            outcome: entry.outcome || "ended",
            name: formatDisplayText(entry.name, "Contact"),
            phoneNumber: entry.phoneNumber || null,
            avatarColor: entry.avatarColor || "#128C7E",
            createdAt: entry.createdAt || new Date().toISOString(),
            answeredAt: entry.answeredAt || null,
            endedAt: entry.endedAt || null,
            durationSeconds: Number(entry.durationSeconds || 0),
        };
        const key = normalized.callId || `history-${normalized.id}`;
        const existing = byKey.get(key);
        if (!existing) {
            byKey.set(key, normalized);
            return;
        }
        const shouldReplace = Number.isInteger(normalized.id) || !Number.isInteger(existing.id);
        byKey.set(key, shouldReplace ? { ...existing, ...normalized } : { ...normalized, ...existing });
    });

    return Array.from(byKey.values())
        .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt))
        .slice(0, 60);
}

function normalizeStatusItems(items) {
    const byId = new Map();
    (Array.isArray(items) ? items : []).forEach((item) => {
        const id = Number(item?.id);
        if (!Number.isInteger(id)) {
            return;
        }
        byId.set(id, {
            ...item,
            id,
            isOwn: Boolean(item.isOwn),
            user: item.user || {},
            text: item.text || "",
            mimeType: item.mimeType || null,
            mediaUrl: item.mediaUrl || null,
            createdAt: item.createdAt || new Date().toISOString(),
            expiresAt: item.expiresAt || null,
        });
    });
    return Array.from(byId.values()).sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
}

function mergeStatusItem(statusItem) {
    state.statusItems = normalizeStatusItems([statusItem, ...state.statusItems]);
    renderStoryStrip();
    if (state.sidebarView === "status") {
        renderStatusList();
    }
}

function getStatusPreview(statusItem) {
    if (!statusItem) {
        return "No status updates yet.";
    }
    const text = String(statusItem.text || "").trim();
    if (text) {
        return text;
    }
    if (statusItem.mimeType?.startsWith("image/")) {
        return "Photo update";
    }
    if (statusItem.mimeType?.startsWith("video/")) {
        return "Video update";
    }
    return "Status update";
}

function buildStatusGroups() {
    const groups = new Map();
    normalizeStatusItems(state.statusItems).forEach((statusItem) => {
        const ownerId = Number(statusItem.user?.id || (statusItem.isOwn ? state.me?.id : 0));
        const key = Number.isInteger(ownerId) && ownerId > 0 ? ownerId : `owner-${statusItem.id}`;
        if (!groups.has(key)) {
            groups.set(key, {
                id: `status-${key}`,
                ownerId: key,
                isOwn: Boolean(statusItem.isOwn),
                title: statusItem.isOwn ? "My status" : getUserPrimaryText(statusItem.user, "Contact"),
                avatar: createAvatarLabel(getUserPrimaryText(statusItem.user, statusItem.isOwn ? "You" : "Contact")),
                avatarColor: statusItem.user?.avatarColor || (statusItem.isOwn ? state.me?.avatarColor : null) || "#128C7E",
                statuses: [],
                latest: null,
            });
        }
        const group = groups.get(key);
        group.statuses.push(statusItem);
        if (!group.latest || new Date(statusItem.createdAt) > new Date(group.latest.createdAt)) {
            group.latest = statusItem;
        }
    });

    const ordered = Array.from(groups.values()).sort((left, right) => {
        const leftStamp = left.latest ? new Date(left.latest.createdAt).getTime() : 0;
        const rightStamp = right.latest ? new Date(right.latest.createdAt).getTime() : 0;
        return rightStamp - leftStamp;
    });

    if (!ordered.some((group) => group.isOwn)) {
        ordered.unshift({
            id: "status-self",
            ownerId: state.me?.id || "self",
            isOwn: true,
            title: "My status",
            avatar: createAvatarLabel(getUserPrimaryText(state.me, "You")),
            avatarColor: state.me?.avatarColor || "#128C7E",
            statuses: [],
            latest: null,
        });
    }

    return ordered.map((group) => {
        const latest = group.latest;
        return {
            id: group.id,
            ownerId: group.ownerId,
            isOwn: group.isOwn,
            hasStatuses: Boolean(latest),
            title: group.title,
            avatar: group.avatar,
            avatarColor: group.avatarColor,
            meta: latest ? formatChatListTime(latest.createdAt) : "Tap to add a status",
            body: latest ? getStatusPreview(latest) : "Share a text, photo, or video update.",
            fresh: latest ? (new Date(latest.expiresAt || latest.createdAt).getTime() > Date.now()) : true,
            latestStatus: latest,
            statuses: group.statuses,
            statusCount: group.statuses.length,
        };
    });
}

async function submitTextStatus() {
    const input = window.prompt("Write your WaveChat status");
    if (input === null) {
        return;
    }
    const text = input.trim();
    if (!text) {
        showToast("Status text cannot be empty.", "error");
        return;
    }
    const data = await apiFetch("/api/status", {
        method: "POST",
        body: { text },
    });
    mergeStatusItem(data.status);
    showToast("Status posted.");
}

function openStatusMediaPicker() {
    if (!refs.statusFileInput) {
        showToast("Status media picker is unavailable right now.", "error");
        return;
    }
    refs.statusFileInput.click();
}

async function submitStatusMedia(file) {
    if (!file) {
        return;
    }
    const formData = new FormData();
    formData.append("file", file);
    if (file.type) {
        formData.append("mimeType", file.type);
    }
    const caption = window.prompt("Add a caption (optional)") || "";
    if (caption.trim()) {
        formData.append("text", caption.trim());
    }
    const data = await apiFetch("/api/status", {
        method: "POST",
        body: formData,
    });
    if (refs.statusFileInput) {
        refs.statusFileInput.value = "";
    }
    mergeStatusItem(data.status);
    showToast("Status posted.");
}

function buildStoryItems() {
    const items = buildStatusGroups();
    state.storyItems = items;
    return items;
}

function openStoryViewer(storyId) {
    const story = state.storyItems.find((item) => item.id === storyId);
    if (!story || !refs.storyViewer) {
        return;
    }

    if (story.isOwn && !story.hasStatuses) {
        void submitTextStatus().catch((error) => {
            showToast(error.message, "error");
        });
        return;
    }

    refs.storyViewerAvatar.textContent = story.avatar;
    refs.storyViewerAvatar.style.background = story.avatarColor;
    refs.storyViewerTitle.textContent = story.title;
    refs.storyViewerMeta.textContent = story.meta || "Just now";
    refs.storyViewerBody.innerHTML = "";

    const latest = story.latestStatus;
    let hasMedia = false;

    if (latest?.mediaUrl && latest.mimeType?.startsWith("image/")) {
        const image = document.createElement("img");
        image.className = "story-viewer-media";
        image.src = latest.mediaUrl;
        image.alt = story.title + " status";
        refs.storyViewerBody.appendChild(image);
        hasMedia = true;
    } else if (latest?.mediaUrl && latest.mimeType?.startsWith("video/")) {
        const video = document.createElement("video");
        video.className = "story-viewer-media";
        video.src = latest.mediaUrl;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        refs.storyViewerBody.appendChild(video);
        hasMedia = true;
    }

    if (!hasMedia) {
        const placeholder = document.createElement("div");
        placeholder.className = "story-viewer-placeholder";
        placeholder.innerHTML = `
            <div class="story-placeholder-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6 9.5 4h5L16 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" fill="currentColor" opacity="0.35"/></svg>
            </div>
            <h3>${story.title}'s Story</h3>
            <p>${story.body || "Story content would appear here"}</p>
        `;
        refs.storyViewerBody.appendChild(placeholder);
    } else if (story.body) {
        const textBlock = document.createElement("div");
        textBlock.className = "story-viewer-text";
        textBlock.textContent = story.body;
        refs.storyViewerBody.appendChild(textBlock);
    }

    if (story.statusCount > 1) {
        const helper = document.createElement("div");
        helper.className = "story-viewer-helper";
        helper.textContent = `${story.statusCount} updates in the last 24 hours`;
        refs.storyViewerBody.appendChild(helper);
    }

    refs.storyViewer.classList.remove("hidden");
    document.body.classList.add("story-viewer-open");
}

function closeStoryViewer() {
    refs.storyViewer?.classList.add('hidden');
    document.body.classList.remove('story-viewer-open');
    if (refs.storyReplyInput) {
        refs.storyReplyInput.value = "";
    }
}

function renderStoryStrip() {
    ensureStoryShell();
    if (!refs.storyStrip) {
        return;
    }
    const items = buildStoryItems().filter((story) => !story.isOwn && story.hasStatuses);
    refs.storyStrip.innerHTML = '';
    if (!items.length) {
        refs.storyStrip.classList.add('hidden');
        return;
    }
    refs.storyStrip.classList.remove('hidden');
    items.forEach((story) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'story-pill' + (story.fresh ? ' fresh' : '');
        button.dataset.storyId = story.id;
        button.innerHTML = `
            <span class="story-pill-avatar" style="background:${story.avatarColor}">${story.avatar}</span>
            <span class="story-pill-copy">
                <strong>${story.title}</strong>
                <span>${story.meta || 'Update'}</span>
            </span>
        `;
        refs.storyStrip.appendChild(button);
    });
}

async function mergeChats(chatItems, options = {}) {
    const replace = Boolean(options.replace);
    const currentChats = state.chats instanceof Map ? state.chats : new Map();
    const nextChats = replace ? new Map() : new Map(currentChats);
    const incomingIds = new Set();

    (Array.isArray(chatItems) ? chatItems : []).forEach((item) => {
        const chatId = Number(item?.id);
        if (!Number.isInteger(chatId)) {
            return;
        }

        const existing = currentChats.get(chatId) || nextChats.get(chatId) || {};
        const merged = {
            ...existing,
            ...item,
            id: chatId,
            counterpart: item?.counterpart
                ? { ...(existing.counterpart || {}), ...item.counterpart }
                : existing.counterpart || null,
            lastMessage: item?.lastMessage
                ? { ...(existing.lastMessage || {}), ...item.lastMessage }
                : existing.lastMessage || null,
            unreadCount: item?.unreadCount ?? existing.unreadCount ?? 0,
        };

        nextChats.set(chatId, merged);
        incomingIds.add(chatId);
    });

    if (replace) {
        currentChats.forEach((_chat, chatId) => {
            if (!incomingIds.has(chatId)) {
                nextChats.delete(chatId);
                state.messages.delete(chatId);
                state.typingState.delete(chatId);
                state.drafts.delete(String(chatId));
            }
        });
    }

    state.chats = nextChats;

    if (state.activeChatId && !state.chats.has(state.activeChatId)) {
        state.activeChatId = null;
    }
}

async function refreshBootstrap() {
    const activeVirtualChatId = isVirtualChat(state.chats.get(state.activeChatId))
        ? state.activeChatId
        : null;
    const data = await apiFetch("/api/bootstrap");
    state.csrfToken = data.csrfToken || state.csrfToken;
    state.me = data.me || state.me;
    if (data.socketToken && refs.chatApp) {
        refs.chatApp.dataset.socketToken = data.socketToken;
    }
    state.callHistory = normalizeCallHistoryEntries(data.callHistory || state.callHistory);
    persistCallHistory();
    state.statusItems = normalizeStatusItems(data.statusPosts || []);
    await mergeChats(data.chats || [], { replace: true });
    ensureWaveBotChat();
    if (activeVirtualChatId && state.chats.has(activeVirtualChatId)) {
        state.activeChatId = activeVirtualChatId;
    }
    renderStoryStrip();
    return data;
}

function buildPhoneLookupEntry() {
    const query = refs.chatSearch?.value.trim() || "";
    if (!looksLikePhoneQuery(query) && !state.phoneSearchLoading) {
        return null;
    }

    const result = state.phoneSearchResult;
    if (!state.phoneSearchLoading && (!result || result.query !== query)) {
        return null;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "chat-entry search-result-entry";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-item search-result-item";

    const avatarWrap = document.createElement("div");
    avatarWrap.className = "chat-avatar-wrap";
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.style.background = result?.user?.avatarColor || state.me?.avatarColor || "#128C7E";
    avatar.textContent = createAvatarLabel(getUserPrimaryText(result?.user, formatPhoneDisplay(query)));
    avatarWrap.appendChild(avatar);

    const contentBox = document.createElement("div");
    contentBox.className = "chat-item-content";
    const topRow = document.createElement("div");
    topRow.className = "chat-item-row";
    const title = document.createElement("div");
    title.className = "chat-item-title";
    const strong = document.createElement("strong");
    const badge = document.createElement("span");
    badge.className = "search-result-badge";
    const time = document.createElement("span");
    time.className = "chat-item-time";
    time.textContent = "Search";
    const previewRow = document.createElement("div");
    previewRow.className = "chat-item-row chat-preview-row";
    const preview = document.createElement("span");
    preview.className = "chat-preview";

    if (state.phoneSearchLoading) {
        strong.textContent = formatPhoneDisplay(query);
        badge.textContent = "Find";
        preview.textContent = "Looking for this number...";
        button.disabled = true;
    } else if (result?.mode === "none") {
        strong.textContent = formatPhoneDisplay(query);
        badge.textContent = "No user";
        preview.textContent = "No account found for this number yet.";
        button.disabled = true;
    } else {
        strong.textContent = getUserPrimaryText(result?.user, formatPhoneDisplay(query));
        badge.textContent = result?.mode === "existing" ? "Open" : "New";
        preview.textContent = result?.mode === "existing"
            ? "Open the chat for " + formatPhoneDisplay(result?.user?.phoneNumber || query)
            : "Start a chat with " + formatPhoneDisplay(result?.user?.phoneNumber || query);
        button.dataset.phoneResult = result?.user?.phoneNumber || query;
        if (result?.mode === "existing" && result.chatId) {
            button.dataset.chatId = String(result.chatId);
        }
    }

    title.append(strong, badge);
    topRow.append(title, time);
    previewRow.append(preview);
    contentBox.append(topRow, previewRow);
    button.append(avatarWrap, contentBox);
    wrapper.append(button);
    return wrapper;
}

function getSidebarTitle() {
    if (state.sidebarView === "calls") {
        return "Calls";
    }
    if (state.sidebarView === "status") {
        return isMobileViewport() ? "Stories" : "Status";
    }
    return isMobileViewport() ? "Wave Chat" : "Chats";
}

function getSidebarSearchPlaceholder() {
    if (state.sidebarView === "calls") {
        return "Search calls";
    }
    if (state.sidebarView === "status") {
        return isMobileViewport() ? "Search stories" : "Search status or stories";
    }
    return isMobileViewport() ? "Search conversations" : "Search chats or phone number";
}

function updateSidebarChrome() {
    refs.sidebarTitle && (refs.sidebarTitle.textContent = getSidebarTitle());
    refs.chatSearch && (refs.chatSearch.placeholder = getSidebarSearchPlaceholder());
    refs.chatFilters?.classList.toggle("hidden", state.sidebarView !== "chats");
    refs.newChatButton?.classList.toggle("hidden", state.sidebarView !== "chats");
    const showSidebarMore = state.sidebarView === "chats" || (isMobileViewport() && state.sidebarView !== "chats");
    refs.sidebarMoreButton?.classList.toggle("hidden", !showSidebarMore);
    refs.storyStrip?.classList.toggle("hidden", state.sidebarView !== "chats" || isMobileViewport());
    if (refs.chatApp) {
        refs.chatApp.dataset.sidebarView = state.sidebarView;
    }
    if (refs.chatSearch) {
        const hideSearch = isMobileViewport() && state.sidebarView !== "chats";
        refs.chatSearch.classList.toggle("hidden", hideSearch);
    }

    const buttons = [
        [refs.railChatsButton, "chats"],
        [refs.railCallsButton, "calls"],
        [refs.railStatusButton, "status"],
    ];
    buttons.forEach(([button, view]) => {
        if (!button) {
            return;
        }
        const active = state.sidebarView === view;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    updateMobileNav();
}

function setSidebarView(view) {
    if (!SIDEBAR_VIEWS.has(view)) {
        return;
    }
    state.sidebarView = view;
    if (state.phoneSearchTimer) {
        window.clearTimeout(state.phoneSearchTimer);
        state.phoneSearchTimer = null;
    }
    state.phoneSearchLoading = false;
    state.phoneSearchResult = null;
    refs.chatSearch && (refs.chatSearch.value = "");
    if (refs.callModalRoot && !refs.callModalRoot.classList.contains("hidden")) {
        closeCallModal();
    }
    updateSidebarChrome();
    renderChatList();
    if (isMobileViewport() && refs.chatApp) {
        refs.chatApp.dataset.activeScreen = "list";
        document.body.classList.remove("chat-focused");
    }
}

function resolveCallHistoryOutcome(call, reason) {
    if (call?.status === "connected") {
        return "completed";
    }
    const normalized = String(reason || "").trim().toLowerCase();
    if (normalized === "busy") {
        return "busy";
    }
    if (normalized === "declined") {
        return call?.direction === "incoming" ? "missed" : "declined";
    }
    if (normalized === "device-error" || normalized === "unsupported") {
        return "failed";
    }
    if (normalized === "unavailable") {
        return "missed";
    }
    if (call?.direction === "outgoing" && (call?.status === "dialing" || call?.status === "ringing")) {
        return "cancelled";
    }
    if (call?.direction === "incoming" && call?.status === "incoming") {
        return "missed";
    }
    return normalized || "ended";
}

function getCallOutcomeLabel(outcome) {
    const normalized = String(outcome || "ended").toLowerCase();
    if (normalized === "completed") {
        return "Completed";
    }
    if (normalized === "missed") {
        return "Missed";
    }
    if (normalized === "busy") {
        return "Busy";
    }
    if (normalized === "declined") {
        return "Declined";
    }
    if (normalized === "cancelled") {
        return "Cancelled";
    }
    if (normalized === "failed") {
        return "Failed";
    }
    return "Ended";
}

function recordCallHistory(call, reason = "ended") {
    if (!call || call.historyLogged || !call.chatId) {
        return;
    }
    const chat = state.chats.get(call.chatId);
    const counterpart = chat?.counterpart || {};
    const startedAt = call.startedAt || new Date().toISOString();
    const durationSeconds = state.callStartedAt
        ? Math.max(1, Math.round((Date.now() - state.callStartedAt) / 1000))
        : 0;
    const entry = {
        id: createLocalMessageId("call"),
        chatId: call.chatId,
        callId: call.callId,
        callType: call.callType === "video" ? "video" : "voice",
        direction: call.direction === "incoming" ? "incoming" : "outgoing",
        outcome: resolveCallHistoryOutcome(call, reason),
        name: formatDisplayText(call.remoteName || counterpart.displayName || counterpart.phoneNumber || "Contact", "Contact"),
        phoneNumber: counterpart.phoneNumber || null,
        avatarColor: call.remoteAvatarColor || counterpart.avatarColor || "#128C7E",
        createdAt: startedAt,
        durationSeconds,
    };
    call.historyLogged = true;
    state.callHistory = normalizeCallHistoryEntries([entry, ...state.callHistory]);
    persistCallHistory();
}

function formatCallHistoryMeta(entry) {
    const parts = [
        entry.callType === "video" ? "Video" : "Voice",
        entry.direction === "incoming" ? "Incoming" : "Outgoing",
        getCallOutcomeLabel(entry.outcome),
    ];
    if (entry.durationSeconds) {
        parts.push(formatCallDuration(entry.durationSeconds));
    }
    return parts.join(" / ");
}

async function startSidebarCall(chatId, callType) {
    const chat = state.chats.get(Number(chatId));
    if (!chat) {
        throw new Error("Chat not found.");
    }
    await selectChat(Number(chatId));
    await startOutgoingCall(callType);
}

function renderCallsList() {
    refs.chatList.innerHTML = "";
    const query = refs.chatSearch?.value.trim().toLowerCase() || "";
    const historyItems = state.callHistory.filter((entry) => {
        if (!query) {
            return true;
        }
        const searchable = [entry.name, entry.phoneNumber || "", formatCallHistoryMeta(entry), getCallOutcomeLabel(entry.outcome)].join(" ").toLowerCase();
        return searchable.includes(query) || phoneMatchesQuery(entry.phoneNumber || "", query);
    });

    if (isMobileViewport()) {
        const ownStory = allStories.find((story) => story.isOwn);
        const meLabel = createAvatarLabel(getUserPrimaryText(state.me || {}, "You"));
        const mySection = document.createElement("section");
        mySection.className = "status-my-story";
        mySection.innerHTML = `
            <div class="status-my-row" data-create-status="media" role="button" tabindex="0">
                <span class="story-avatar-wrap own">
                    <span class="avatar status-history-avatar status-my-avatar" style="background:${ownStory?.avatarColor || "#d9d9d9"}">${ownStory?.avatar || meLabel}</span>
                    <span class="status-plus">+</span>
                </span>
                <span class="status-my-copy">
                    <strong>My Story</strong>
                    <span>${ownStory?.hasStatuses ? (ownStory.meta || "Tap to view story") : "Tap to add story"}</span>
                </span>
            </div>
        `;
        refs.chatList.appendChild(mySection);

        const recentStories = stories.filter((story) => !story.isOwn && story.hasStatuses && story.fresh);
        const viewedStories = stories.filter((story) => !story.isOwn && story.hasStatuses && !story.fresh);

        const recentSection = document.createElement("section");
        recentSection.className = "status-section";
        recentSection.innerHTML = '<div class="status-section-title">Recent stories</div>';
        if (!recentStories.length) {
            const empty = document.createElement("div");
            empty.className = "sidebar-empty-state";
            empty.textContent = query ? "No recent stories match this search." : "No recent stories yet.";
            recentSection.appendChild(empty);
        } else {
            recentStories.forEach((story) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "status-history-item mobile-story-row";
                button.dataset.storyId = story.id;
                button.innerHTML = `
                    <span class="story-avatar-wrap fresh">
                        <span class="avatar status-history-avatar" style="background:${story.avatarColor}">${story.avatar}</span>
                    </span>
                    <span class="status-history-copy">
                        <strong>${story.title}</strong>
                        <span>${story.meta || "Just now"}</span>
                    </span>
                `;
                recentSection.appendChild(button);
            });
        }
        refs.chatList.appendChild(recentSection);

        const viewedSection = document.createElement("section");
        viewedSection.className = "status-section";
        viewedSection.innerHTML = '<div class="status-section-title">Viewed stories</div>';
        if (!viewedStories.length) {
            const empty = document.createElement("div");
            empty.className = "sidebar-empty-state";
            empty.textContent = query ? "No viewed stories match this search." : "No viewed stories yet.";
            viewedSection.appendChild(empty);
        } else {
            viewedStories.forEach((story) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "status-history-item mobile-story-row";
                button.dataset.storyId = story.id;
                button.innerHTML = `
                    <span class="story-avatar-wrap viewed">
                        <span class="avatar status-history-avatar" style="background:${story.avatarColor}">${story.avatar}</span>
                    </span>
                    <span class="status-history-copy">
                        <strong>${story.title}</strong>
                        <span>${story.meta || "Earlier"}</span>
                    </span>
                `;
                viewedSection.appendChild(button);
            });
        }
        refs.chatList.appendChild(viewedSection);
        return;
    }

    const contacts = Array.from(state.chats.values())
        .filter((chat) => !isVirtualChat(chat))
        .filter((chat) => {
            if (!query) {
                return true;
            }
            const searchable = [
                getUserPrimaryText(chat.counterpart, ""),
                formatPhoneDisplay(chat.counterpart?.phoneNumber || ""),
                chat.counterpart?.phoneNumber || "",
                getChatPreviewText(chat),
            ].join(" ").toLowerCase();
            return searchable.includes(query) || phoneMatchesQuery(chat.counterpart?.phoneNumber || "", query);
        })
        .sort((left, right) => {
            const onlineDelta = Number(Boolean(right.counterpart?.isOnline)) - Number(Boolean(left.counterpart?.isOnline));
            if (onlineDelta !== 0) {
                return onlineDelta;
            }
            return getChatSortValue(right) - getChatSortValue(left);
        })
        .slice(0, 8);

    const friendsSection = document.createElement("section");
    friendsSection.className = "sidebar-card-list";
    friendsSection.innerHTML = '<div class="sidebar-list-head"><strong>Call friends</strong><span>Voice or video from one place</span></div>';
    if (!contacts.length) {
        const emptyContacts = document.createElement("div");
        emptyContacts.className = "sidebar-empty-state";
        emptyContacts.textContent = "No contacts ready for calls yet.";
        friendsSection.appendChild(emptyContacts);
    } else {
        contacts.forEach((chat) => {
            const row = document.createElement("div");
            row.className = "call-contact-item";
            row.innerHTML = `
                <button type="button" class="call-contact-main" data-call-chat-id="${chat.id}">
                    <span class="avatar call-contact-avatar" style="background:${chat.counterpart?.avatarColor || "#128C7E"}">${createAvatarLabel(getUserPrimaryText(chat.counterpart, "Contact"))}</span>
                    <span class="call-contact-copy">
                        <strong>${getUserPrimaryText(chat.counterpart, "Contact")}</strong>
                        <span>${chat.counterpart?.isOnline ? "Online now" : (formatStatus(chat) || "Unavailable")}</span>
                    </span>
                </button>
                <div class="call-contact-actions">
                    <button type="button" class="icon-btn compact-btn toolbar-button" data-call-contact-id="${chat.id}" data-call-type="voice" aria-label="Voice call" title="Voice call" ${canStartCallForChat(chat) ? "" : "disabled"}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.3 21.2 2.8 13.7 2.8 4.4 2.8 3.7 3.3 3.2 4 3.2h3.2c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2 2.2z"/></svg>
                    </button>
                    <button type="button" class="icon-btn compact-btn toolbar-button" data-call-contact-id="${chat.id}" data-call-type="video" aria-label="Video call" title="Video call" ${canStartCallForChat(chat) ? "" : "disabled"}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 10.5V7a2 2 0 0 0-2-2H5A2 2 0 0 0 3 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5L22 18V6z"/></svg>
                    </button>
                </div>
            `;
            friendsSection.appendChild(row);
        });
    }
    refs.chatList.appendChild(friendsSection);

    const historySection = document.createElement("section");
    historySection.className = "sidebar-card-list";
    historySection.innerHTML = '<div class="sidebar-list-head"><strong>Recent calls</strong><span>Voice and video history</span></div>';

    if (!historyItems.length) {
        const emptyHistory = document.createElement("div");
        emptyHistory.className = "sidebar-empty-state";
        emptyHistory.textContent = "No call history yet. Start a voice or video call from any chat.";
        historySection.appendChild(emptyHistory);
    } else {
        historyItems.forEach((entry) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "call-history-item";
            if (entry.chatId) {
                button.dataset.callChatId = String(entry.chatId);
            }
            button.innerHTML = `
                <span class="avatar call-history-avatar" style="background:${entry.avatarColor || "#128C7E"}">${createAvatarLabel(entry.name || "C")}</span>
                <span class="call-history-copy">
                    <span class="call-history-top"><strong>${entry.name || "Contact"}</strong><span>${formatChatListTime(entry.createdAt)}</span></span>
                    <span class="call-history-bottom"><span>${formatCallHistoryMeta(entry)}</span><span>${formatDateTime(entry.createdAt)}</span></span>
                </span>
            `;
            historySection.appendChild(button);
        });
    }
    refs.chatList.appendChild(historySection);
}

function renderStatusList() {
    refs.chatList.innerHTML = "";
    const query = refs.chatSearch?.value.trim().toLowerCase() || "";
    const allStories = buildStoryItems();
    const stories = allStories.filter((story) => {
        if (!query) {
            return true;
        }
        return [story.title, story.meta || "", story.body || ""].join(" ").toLowerCase().includes(query);
    });

    if (isMobileViewport()) {
        const ownStory = allStories.find((story) => story.isOwn);
        const meLabel = createAvatarLabel(getUserPrimaryText(state.me || {}, "You"));
        const mySection = document.createElement("section");
        mySection.className = "status-my-story";
        mySection.innerHTML = `
            <div class="status-my-row" data-create-status="media" role="button" tabindex="0">
                <span class="story-avatar-wrap own">
                    <span class="avatar status-history-avatar status-my-avatar" style="background:${ownStory?.avatarColor || "#d9d9d9"}">${ownStory?.avatar || meLabel}</span>
                    <span class="status-plus">+</span>
                </span>
                <span class="status-my-copy">
                    <strong>My Story</strong>
                    <span>${ownStory?.hasStatuses ? (ownStory.meta || "Tap to view story") : "Tap to add story"}</span>
                </span>
            </div>
        `;
        refs.chatList.appendChild(mySection);

        const recentStories = stories.filter((story) => !story.isOwn && story.hasStatuses && story.fresh);
        const viewedStories = stories.filter((story) => !story.isOwn && story.hasStatuses && !story.fresh);

        const recentSection = document.createElement("section");
        recentSection.className = "status-section";
        recentSection.innerHTML = '<div class="status-section-title">Recent stories</div>';
        if (!recentStories.length) {
            const empty = document.createElement("div");
            empty.className = "sidebar-empty-state";
            empty.textContent = query ? "No recent stories match this search." : "No recent stories yet.";
            recentSection.appendChild(empty);
        } else {
            recentStories.forEach((story) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "status-history-item mobile-story-row";
                button.dataset.storyId = story.id;
                button.innerHTML = `
                    <span class="story-avatar-wrap fresh">
                        <span class="avatar status-history-avatar" style="background:${story.avatarColor}">${story.avatar}</span>
                    </span>
                    <span class="status-history-copy">
                        <strong>${story.title}</strong>
                        <span>${story.meta || "Just now"}</span>
                    </span>
                `;
                recentSection.appendChild(button);
            });
        }
        refs.chatList.appendChild(recentSection);

        const viewedSection = document.createElement("section");
        viewedSection.className = "status-section";
        viewedSection.innerHTML = '<div class="status-section-title">Viewed stories</div>';
        if (!viewedStories.length) {
            const empty = document.createElement("div");
            empty.className = "sidebar-empty-state";
            empty.textContent = query ? "No viewed stories match this search." : "No viewed stories yet.";
            viewedSection.appendChild(empty);
        } else {
            viewedStories.forEach((story) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "status-history-item mobile-story-row";
                button.dataset.storyId = story.id;
                button.innerHTML = `
                    <span class="story-avatar-wrap viewed">
                        <span class="avatar status-history-avatar" style="background:${story.avatarColor}">${story.avatar}</span>
                    </span>
                    <span class="status-history-copy">
                        <strong>${story.title}</strong>
                        <span>${story.meta || "Earlier"}</span>
                    </span>
                `;
                viewedSection.appendChild(button);
            });
        }
        refs.chatList.appendChild(viewedSection);
        return;
    }

    const ownStory = allStories.find((story) => story.isOwn);
    const updates = stories.filter((story) => !story.isOwn && story.hasStatuses);

    const createSection = document.createElement("section");
    createSection.className = "sidebar-card-list status-compose-card";
    createSection.innerHTML = `
        <div class="sidebar-list-head"><strong>Status</strong><span>${ownStory?.hasStatuses ? (ownStory.meta || "Add update") : "Share a text, photo, or video update"}</span></div>
        <div class="status-create-actions">
            <button type="button" class="secondary-btn status-action-btn" data-create-status="text">Text status</button>
            <button type="button" class="secondary-btn status-action-btn" data-create-status="media">Photo or video</button>
        </div>
    `;
    refs.chatList.appendChild(createSection);

    const section = document.createElement("section");
    section.className = "sidebar-card-list";
    section.innerHTML = '<div class="sidebar-list-head"><strong>Recent updates</strong><span>Tap any update to open it</span></div>';

    if (!updates.length) {
        const empty = document.createElement("div");
        empty.className = "sidebar-empty-state";
        empty.textContent = query
            ? "No status updates match this search right now."
            : "No recent updates from your contacts yet.";
        section.appendChild(empty);
    } else {
        updates.forEach((story) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "status-history-item" + (story.fresh ? " fresh" : "");
            button.dataset.storyId = story.id;
            button.innerHTML = `
                <span class="avatar status-history-avatar" style="background:${story.avatarColor}">${story.avatar}</span>
                <span class="status-history-copy">
                    <span class="status-history-top"><strong>${story.title}</strong><span>${story.meta || "Update"}</span></span>
                    <span class="status-history-bottom">${story.body || "Wave story"}</span>
                </span>
            `;
            section.appendChild(button);
        });
    }

    refs.chatList.appendChild(section);
}

function buildChatListEntry(chat) {
    const wrapper = document.createElement("div");
    wrapper.className = "chat-entry";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-item" + (state.activeChatId === chat.id ? " active" : "");
    button.dataset.chatId = String(chat.id);

    const pinButton = document.createElement("button");
    pinButton.type = "button";
    pinButton.className = "chat-pin-btn" + (isChatPinned(chat.id) ? " pinned" : "");
    pinButton.dataset.pinChatId = String(chat.id);
    pinButton.textContent = isChatPinned(chat.id) ? "Unpin" : "Pin";
    pinButton.title = isChatPinned(chat.id) ? "Unpin chat" : "Pin chat";

    const avatarWrap = document.createElement("div");
    avatarWrap.className = "chat-avatar-wrap";
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.style.background = chat.counterpart?.avatarColor || "#128C7E";
    avatar.textContent = createAvatarLabel(getUserPrimaryText(chat.counterpart, "Contact"));
    avatarWrap.appendChild(avatar);

    if (chat.counterpart?.isOnline) {
        const statusDot = document.createElement("span");
        statusDot.className = "chat-avatar-status";
        avatarWrap.appendChild(statusDot);
    }

    const contentBox = document.createElement("div");
    contentBox.className = "chat-item-content";
    const topRow = document.createElement("div");
    topRow.className = "chat-item-row";
    const title = document.createElement("div");
    title.className = "chat-item-title";
    const strong = document.createElement("strong");
    strong.textContent = getUserPrimaryText(chat.counterpart, "Unknown");
    title.appendChild(strong);

    const time = document.createElement("span");
    time.className = "chat-item-time";
    time.textContent = formatChatListTime(chat.lastMessage?.createdAt || chat.updatedAt);
    topRow.append(title, time);

    const previewRow = document.createElement("div");
    previewRow.className = "chat-item-row chat-preview-row";
    if (chat.lastMessage?.fromSelf) {
        previewRow.classList.add("from-self");
    }
    if (chat.lastMessage?.readAt) {
        previewRow.classList.add("read");
    }

    const preview = document.createElement("span");
    preview.className = "chat-preview";
    const previewText = getChatPreviewText(chat);
    preview.textContent = previewText;
    if (previewText === "typing...") {
        preview.classList.add("typing-text");
    }
    if (previewText.startsWith("Draft:")) {
        preview.classList.add("draft-text");
    }
    previewRow.appendChild(preview);

    if (chat.unreadCount) {
        const unreadBadge = document.createElement("span");
        unreadBadge.className = "unread-badge";
        unreadBadge.textContent = String(Math.min(chat.unreadCount, 99));
        previewRow.appendChild(unreadBadge);
    } else {
        const presence = document.createElement("span");
        presence.className = "presence-dot" + (chat.counterpart?.isOnline ? " online" : "");
        previewRow.appendChild(presence);
    }

    contentBox.append(topRow, previewRow);
    button.append(avatarWrap, contentBox);
    wrapper.append(pinButton, button);
    return wrapper;
}

function renderChatList() {
    if (!refs.chatList) {
        return;
    }

    updateSidebarChrome();
    renderStoryStrip();
    if (state.sidebarView === "calls") {
        renderCallsList();
        return;
    }
    if (state.sidebarView === "status") {
        renderStatusList();
        return;
    }
    const query = refs.chatSearch?.value.trim() || "";
    const hasExistingPhoneChat = looksLikePhoneQuery(query) && Boolean(findExistingChatByPhone(query));
    const chats = Array.from(state.chats.values())
        .filter((chat) => chatMatchesFilter(chat))
        .filter((chat) => chatMatchesSearch(chat, query))
        .sort((left, right) => {
            const pinDelta = Number(isChatPinned(right.id)) - Number(isChatPinned(left.id));
            if (pinDelta !== 0) {
                return pinDelta;
            }
            return getChatSortValue(right) - getChatSortValue(left);
        });

    refs.chatList.innerHTML = "";

    if (!hasExistingPhoneChat) {
        const phoneEntry = buildPhoneLookupEntry();
        if (phoneEntry) {
            refs.chatList.appendChild(phoneEntry);
        }
    }

    if (!chats.length) {
        const empty = document.createElement("div");
        empty.className = "search-result-state";
        empty.textContent = query
            ? "No chats match this search yet."
            : "Search a phone number to start chatting.";
        refs.chatList.appendChild(empty);
        return;
    }

    chats.forEach((chat) => {
        refs.chatList.appendChild(buildChatListEntry(chat));
    });
}

async function lookupPhoneSuggestion(query) {
    const trimmedQuery = String(query || "").trim();
    const token = ++state.phoneSearchToken;

    if (!looksLikePhoneQuery(trimmedQuery)) {
        state.phoneSearchLoading = false;
        state.phoneSearchResult = null;
        renderChatList();
        return;
    }

    const existingChat = findExistingChatByPhone(trimmedQuery);
    if (existingChat) {
        state.phoneSearchLoading = false;
        state.phoneSearchResult = {
            mode: "existing",
            query: trimmedQuery,
            chatId: existingChat.id,
            user: existingChat.counterpart,
        };
        renderChatList();
        return;
    }

    state.phoneSearchLoading = true;
    state.phoneSearchResult = { mode: "loading", query: trimmedQuery };
    renderChatList();

    try {
        const data = await apiFetch("/api/users/find?phone=" + encodeURIComponent(trimmedQuery));
        if (token !== state.phoneSearchToken) {
            return;
        }
        state.phoneSearchResult = {
            mode: "user",
            query: trimmedQuery,
            user: data.user,
        };
    } catch (error) {
        if (token !== state.phoneSearchToken) {
            return;
        }
        const message = String(error?.message || "").toLowerCase();
        if (message.includes("no user found")) {
            state.phoneSearchResult = {
                mode: "none",
                query: trimmedQuery,
            };
        } else {
            console.error(error);
            state.phoneSearchResult = null;
        }
    } finally {
        if (token === state.phoneSearchToken) {
            state.phoneSearchLoading = false;
            renderChatList();
        }
    }
}

function handleChatSearchInput() {
    const query = refs.chatSearch?.value.trim() || "";

    if (state.phoneSearchTimer) {
        window.clearTimeout(state.phoneSearchTimer);
        state.phoneSearchTimer = null;
    }

    if (state.sidebarView !== "chats") {
        state.phoneSearchLoading = false;
        state.phoneSearchResult = null;
        renderChatList();
        return;
    }

    if (!query) {
        state.phoneSearchLoading = false;
        state.phoneSearchResult = null;
        renderChatList();
        return;
    }

    renderChatList();

    if (!looksLikePhoneQuery(query)) {
        state.phoneSearchLoading = false;
        state.phoneSearchResult = null;
        renderChatList();
        return;
    }

    state.phoneSearchLoading = true;
    state.phoneSearchResult = { mode: "loading", query };
    renderChatList();
    state.phoneSearchTimer = window.setTimeout(() => {
        void lookupPhoneSuggestion(query);
    }, 240);
}

function hideLoginSplash() {
    if (!refs.loginSplash) {
        return;
    }
    refs.loginSplash.classList.add("hidden");
    refs.loginSplash.setAttribute("aria-hidden", "true");
    document.body.classList.remove("splash-active");
}

function showLoginSplashIfNeeded() {
    if (!refs.loginSplash || sessionStorage.getItem("wavechat-show-splash") !== "1") {
        return;
    }

    sessionStorage.removeItem("wavechat-show-splash");
    document.body.classList.add("splash-active");
    refs.loginSplash.classList.remove("hidden");
    refs.loginSplash.setAttribute("aria-hidden", "false");

    const finish = (() => {
        let done = false;
        return () => {
            if (done) {
                return;
            }
            done = true;
            hideLoginSplash();
        };
    })();

    const splashTimeout = window.setTimeout(finish, 3600);

    if (refs.loginSplashVideo) {
        refs.loginSplashVideo.currentTime = 0;
        refs.loginSplashVideo.addEventListener("ended", () => {
            window.clearTimeout(splashTimeout);
            finish();
        }, { once: true });
        refs.loginSplashVideo.addEventListener("error", () => {
            window.clearTimeout(splashTimeout);
            finish();
        }, { once: true });
        const playPromise = refs.loginSplashVideo.play?.();
        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => undefined);
        }
    }
}
function chatMatchesFilter(chat) {
    if (state.chatFilter === "unread") {
        return Boolean(chat.unreadCount);
    }
    if (state.chatFilter === "online") {
        return Boolean(chat.counterpart?.isOnline);
    }
    if (state.chatFilter === "pinned") {
        return isChatPinned(chat.id);
    }
    return true;
}

function getChatPreviewText(chat) {
    if (state.activeCall?.chatId === chat.id) {
        return state.activeCall.callType === "video" ? "Video call live" : "Voice call live";
    }
    if (state.typingState.get(chat.id)?.isTyping) {
        return "typing...";
    }
    const draft = getDraftText(chat.id);
    if (draft && state.activeChatId !== chat.id) {
        return `Draft: ${draft}`;
    }
    return getMessagePreview(chat.lastMessage);
}

function updateSelfStatus() {
    if (!refs.selfStatus) {
        return;
    }
    refs.selfStatus.textContent = state.socketConnected
        ? "Realtime connected"
        : state.pollingMode
            ? "Sync fallback active"
            : state.lastRealtimeError || "Realtime connecting";
    refs.selfStatus.classList.toggle("online", state.socketConnected || state.pollingMode);
    refs.selfStatus.classList.toggle("offline", !state.socketConnected && !state.pollingMode);
}

function renderSelfProfile() {
    if (!state.me) {
        return;
    }

    const primaryText = getUserPrimaryText(state.me, "You");
    const phoneText = formatPhoneDisplay(state.me.phoneNumber || "");
    const avatarLabel = createAvatarLabel(primaryText);
    const avatarColor = state.me.avatarColor || "#128C7E";

    refs.selfAvatar.textContent = avatarLabel;
    refs.selfAvatar.style.background = avatarColor;
    refs.profilePanelAvatar && (refs.profilePanelAvatar.textContent = avatarLabel);
    refs.profilePanelAvatar && (refs.profilePanelAvatar.style.background = avatarColor);
    refs.selfName.textContent = primaryText;
    refs.selfPhone.textContent = phoneText;
    updateSelfStatus();
}

function describePreferences(chat) {
    if (!chat) {
        return "No chat selected";
    }
    const values = [];
    if (isWaveBotChat(chat)) {
        values.push("Built-in assistant");
    }
    if (state.activeCall?.chatId === chat.id) {
        values.push(state.activeCall.callType === "video" ? "Video call live" : "Voice call live");
    }
    if (isChatPinned(chat.id)) {
        values.push("Pinned");
    }
    if (isChatMuted(chat.id)) {
        values.push("Muted notifications");
    }
    if (getDraftText(chat.id)) {
        values.push("Draft saved");
    }
    return values.length ? values.join(" / ") : "Live notifications enabled";
}

function setInfoDrawerOpen(isOpen) {
    state.infoDrawerOpen = Boolean(isOpen && state.activeChatId);
    refs.chatInfoDrawer.classList.toggle("hidden", !state.infoDrawerOpen);
    refs.chatInfoButton.classList.toggle("active", state.infoDrawerOpen);
}

function canStartCallForChat(chat) {
    return Boolean(
        chat
        && !isVirtualChat(chat)
        && browserSupportsCalling()
        && state.socketConnected
        && chat.counterpart?.isOnline
        && !state.activeCall
    );
}

function updateCallMenu(chat) {
    if (!refs.callMenu || !refs.callMenuAvatar || !refs.callMenuName) {
        return;
    }

    if (!chat) {
        refs.callMenuAvatar.textContent = "W";
        refs.callMenuAvatar.style.background = "#128C7E";
        refs.callMenuName.textContent = "Select a chat";
        refs.callMenu.querySelectorAll("[data-call-type]").forEach((button) => {
            button.disabled = true;
        });
        return;
    }

    refs.callMenuAvatar.textContent = createAvatarLabel(getUserPrimaryText(chat.counterpart, "Contact"));
    refs.callMenuAvatar.style.background = chat.counterpart?.avatarColor || "#128C7E";
    refs.callMenuName.textContent = getUserPrimaryText(chat.counterpart, "Unknown");

    const disabled = !canStartCallForChat(chat);
    refs.callMenu.querySelectorAll("[data-call-type]").forEach((button) => {
        button.disabled = disabled;
    });
}

function setCallMenuOpen(isOpen) {
    const chat = state.chats.get(state.activeChatId);
    const next = Boolean(isOpen && chat);
    state.callMenuOpen = next;
    refs.callMenu?.classList.toggle("hidden", !next);
    refs.callMenu?.classList.toggle("open", next);
    refs.voiceCallButton?.classList.toggle("active", next);
    refs.videoCallButton?.classList.toggle("active", next);
    refs.voiceCallButton?.setAttribute("aria-expanded", String(next));
    refs.videoCallButton?.setAttribute("aria-expanded", String(next));
    updateCallMenu(chat || null);
}

function updateConversationControls(chat) {
    const hasChat = Boolean(chat);
    const browserCanCall = browserSupportsCalling();
    const inCall = Boolean(state.activeCall);
    const callMatchesChat = hasChat && state.activeCall?.chatId === chat.id;
    const canStartCall = canStartCallForChat(chat);

    refs.voiceCallButton && (refs.voiceCallButton.disabled = !hasChat || !browserCanCall || (!canStartCall && !callMatchesChat));
    refs.videoCallButton && (refs.videoCallButton.disabled = !hasChat || !browserCanCall || (!canStartCall && !callMatchesChat));
    refs.muteChatButton.disabled = !hasChat;
    refs.chatInfoButton.disabled = !hasChat;
    refs.infoTogglePinButton.disabled = !hasChat;
    refs.infoToggleMuteButton.disabled = !hasChat;
    refs.infoDeleteChatButton && (refs.infoDeleteChatButton.disabled = !hasChat);

    if (!hasChat) {
        refs.voiceCallButton?.setAttribute("aria-pressed", "false");
        refs.videoCallButton?.setAttribute("aria-pressed", "false");
        refs.voiceCallButton && (refs.voiceCallButton.title = "Choose a chat first");
        refs.videoCallButton && (refs.videoCallButton.title = "Choose a chat first");
        refs.muteChatButton.classList.toggle("active", false);
        refs.muteChatButton.setAttribute("aria-pressed", "false");
        refs.chatInfoButton.classList.toggle("active", false);
        refs.chatInfoButton.title = "Choose a chat first";
        refs.infoTogglePinButton.textContent = "Pin chat";
        refs.infoToggleMuteButton.textContent = "Mute notifications";
        refs.infoDeleteChatButton && (refs.infoDeleteChatButton.textContent = "Delete chat");
        setCallMenuOpen(false);
        setInfoDrawerOpen(false);
        updateCallMenu(null);
        return;
    }

    const disabledCallTooltip = !browserCanCall
        ? "This browser does not support voice or video calling"
        : !state.socketConnected
            ? (state.pollingMode ? "Calls need a live realtime connection" : "Realtime is still connecting")
            : inCall && !callMatchesChat
                ? "Finish the current call before starting another one"
                : !chat.counterpart?.isOnline
                    ? "Calls work when the contact is online"
                    : "";
    const voiceTooltip = disabledCallTooltip || "Start a voice call";
    const videoTooltip = disabledCallTooltip || "Start a video call";

    refs.voiceCallButton?.setAttribute("aria-pressed", String(Boolean(callMatchesChat && state.activeCall)));
    refs.videoCallButton?.setAttribute("aria-pressed", String(Boolean(callMatchesChat && state.activeCall && state.activeCall.callType === "video")));
    refs.voiceCallButton && (refs.voiceCallButton.title = voiceTooltip);
    refs.videoCallButton && (refs.videoCallButton.title = videoTooltip);

    const muted = isChatMuted(chat.id);
    refs.muteChatButton.classList.toggle("active", muted);
    refs.muteChatButton.title = muted ? "Unmute notifications" : "Mute notifications";
    refs.muteChatButton.setAttribute("aria-pressed", String(muted));
    refs.chatInfoButton.classList.toggle("active", state.infoDrawerOpen);
    refs.chatInfoButton.title = "Open chat info";
    refs.infoTogglePinButton.textContent = isChatPinned(chat.id) ? "Unpin chat" : "Pin chat";
    refs.infoToggleMuteButton.textContent = muted ? "Unmute notifications" : "Mute notifications";
    refs.infoDeleteChatButton && (refs.infoDeleteChatButton.textContent = "Delete chat");
    updateCallMenu(chat);
}

function updateInfoDrawer(chat) {
    if (!chat) {
        refs.infoName.textContent = "No chat selected";
        refs.infoPhone.textContent = "-";
        refs.infoState.textContent = "Offline";
        refs.infoLastSeen.textContent = "-";
        refs.infoMessageCount.textContent = "0";
        refs.infoMediaCount.textContent = "0";
        refs.infoUnreadCount.textContent = "0";
        refs.infoFingerprint.textContent = "Photos, videos and files";
        refs.infoPreferences.textContent = "No chat selected";
        return;
    }

    const loadedMessages = getChatMessages(chat.id);
    const mediaCount = loadedMessages.filter((message) => message.kind === "media").length;
    refs.infoName.textContent = getUserPrimaryText(chat.counterpart, "Unknown");
    refs.infoPhone.textContent = isWaveBotChat(chat)
        ? "Built-in assistant"
        : (formatPhoneDisplay(chat.counterpart?.phoneNumber || "") || "-");
    refs.infoState.textContent = isWaveBotChat(chat)
        ? "Always ready"
        : (chat.counterpart?.isOnline ? "Online" : "Offline");
    refs.infoLastSeen.textContent = isWaveBotChat(chat)
        ? "Instant tips, ideas, and prompts"
        : (chat.counterpart?.lastSeenAt ? formatDateTime(chat.counterpart.lastSeenAt) : "No recent activity");
    refs.infoMessageCount.textContent = String(loadedMessages.length);
    refs.infoMediaCount.textContent = String(mediaCount);
    refs.infoUnreadCount.textContent = String(chat.unreadCount || 0);
    refs.infoFingerprint.textContent = isWaveBotChat(chat)
        ? "Stories, prompts, and helper replies"
        : (mediaCount
            ? String(mediaCount) + " shared item" + (mediaCount === 1 ? "" : "s")
            : "Photos, videos and files");
    refs.infoPreferences.textContent = describePreferences(chat);
}

function refreshChatUi() {
    const activeChat = state.chats.get(state.activeChatId);
    renderChatList();
    updateConversationHeader(activeChat || null);
    updateConversationControls(activeChat || null);
    updateInfoDrawer(activeChat || null);
    updateCallUi();
}

function removeChatLocally(chatId, options = {}) {
    const key = String(chatId);
    const numericChatId = Number(chatId);
    const wasActive = state.activeChatId === numericChatId;

    if (state.activeCall?.chatId === numericChatId) {
        teardownActiveCall();
    }

    state.chats.delete(numericChatId);
    state.messages.delete(numericChatId);
    state.typingState.delete(numericChatId);
    state.pinnedChatIds.delete(key);
    state.mutedChatIds.delete(key);
    state.drafts.delete(key);
    persistPinnedChats();
    persistMutedChats();
    persistDrafts();

    if (wasActive) {
        state.activeChatId = null;
        syncResponsivePreview();
        refs.messages.innerHTML = "";
        refs.messageInput.value = "";
        refs.messageSearch.value = "";
        refs.emptyState.classList.remove("hidden");
        clearAttachmentPreview();
        refs.emojiBar.classList.add("hidden");
        setCallMenuOpen(false);
        setInfoDrawerOpen(false);
        updateConversationHeader(null);
        updateComposerState();
    }

    renderChatList();
    if (!wasActive) {
        updateConversationHeader(state.chats.get(state.activeChatId) || null);
        updateInfoDrawer(state.chats.get(state.activeChatId) || null);
        updateComposerState();
    }

    if (options.toastMessage) {
        showToast(options.toastMessage, options.tone || "info");
    }
}

async function deleteChat(chatId) {
    const chat = state.chats.get(chatId);
    if (!chat) {
        throw new Error("Chat not found.");
    }
    if (state.activeCall?.chatId === chatId) {
        throw new Error("End the current call before deleting this chat.");
    }

    if (isWaveBotChat(chat)) {
        const confirmed = window.confirm("Reset the WaveBot chat on this device? This clears the assistant conversation and keeps WaveBot ready for a fresh start.");
        if (!confirmed) {
            return;
        }
        state.messages.set(SPECIAL_CHAT_IDS.waveBot, [createWaveBotSeedMessage()]);
        chat.unreadCount = 0;
        syncWaveBotChatMeta();
        renderChatList();
        if (state.activeChatId === SPECIAL_CHAT_IDS.waveBot) {
            await renderMessages();
            scrollToBottom();
            updateConversationHeader(chat);
            updateInfoDrawer(chat);
        }
        showToast("WaveBot chat reset.");
        return;
    }

    const targetName = formatDisplayText(getUserPrimaryText(chat.counterpart, "this chat"), "this chat");
    const confirmed = window.confirm(`Delete the chat with ${targetName}? This removes the conversation from both sides in WaveChat.`);
    if (!confirmed) {
        return;
    }

    await apiFetch(`/api/chats/${chatId}`, { method: "DELETE" });
    removeChatLocally(chatId, { toastMessage: "Chat deleted." });
}

function insertIntoComposer(text) {
    if (!state.activeChatId) {
        showToast("Open a chat first.", "error");
        return;
    }
    const input = refs.messageInput;
    input.focus();
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    input.setRangeText(text, start, end, "end");
    scheduleTyping();
    setDraftText(state.activeChatId, input.value);
}
function browserSupportsCalling() {
    return Boolean((window.RTCPeerConnection || window.webkitRTCPeerConnection) && navigator.mediaDevices?.getUserMedia);
}

function getPeerConnectionConstructor() {
    return window.RTCPeerConnection || window.webkitRTCPeerConnection || null;
}

function getActiveCallChat() {
    return state.activeCall ? state.chats.get(state.activeCall.chatId) || null : null;
}

function getRtcSessionDescriptionCtor() {
    return window.RTCSessionDescription || window.webkitRTCSessionDescription || null;
}

function getRtcIceCandidateCtor() {
    return window.RTCIceCandidate || window.webkitRTCIceCandidate || null;
}

function createRtcSessionDescription(description) {
    if (!description || typeof description !== "object") {
        return description;
    }
    const Ctor = getRtcSessionDescriptionCtor();
    if (!Ctor) {
        return description;
    }
    try {
        return new Ctor(description);
    } catch (_error) {
        return description;
    }
}

function createRtcIceCandidate(candidate) {
    if (!candidate || typeof candidate !== "object") {
        return candidate;
    }
    const Ctor = getRtcIceCandidateCtor();
    if (!Ctor) {
        return candidate;
    }
    try {
        return new Ctor(candidate);
    } catch (_error) {
        return candidate;
    }
}

function hasTurnServersConfigured() {
    return Array.isArray(RTC_CONFIGURATION?.iceServers) && RTC_CONFIGURATION.iceServers.some((server) => {
        const urls = Array.isArray(server?.urls) ? server.urls : [server?.urls];
        return urls.some((url) => String(url || "").trim().toLowerCase().startsWith("turn"));
    });
}

function isLocalWaveChatHost() {
    const hostname = String(window.location.hostname || "").toLowerCase();
    return !hostname
        || hostname === "localhost"
        || hostname === "127.0.0.1"
        || hostname === "::1"
        || hostname.endsWith(".local");
}

function getCallFailureToast() {
    if (!isLocalWaveChatHost() && !hasTurnServersConfigured()) {
        return "WaveChat call media could not connect. Add TURN server settings for reliable internet voice and video calls.";
    }
    return "The call connection failed. Check network access and microphone or camera permission.";
}

function maybeWarnAboutInternetCalling() {
    if (state.turnNoticeShown || isLocalWaveChatHost() || hasTurnServersConfigured()) {
        return;
    }
    state.turnNoticeShown = true;
    showToast("Internet calling needs TURN server settings for reliable audio and video.", "info");
}

function formatLocalMediaError(error, callType) {
    const name = String(error?.name || "").toLowerCase();
    if (name === "notallowederror" || name === "permissiondeniederror" || name === "securityerror") {
        return callType === "video"
            ? "Allow microphone and camera access to start a video call."
            : "Allow microphone access to start a voice call.";
    }
    if (name === "notfounderror" || name === "devicesnotfounderror") {
        return callType === "video"
            ? "WaveChat could not find a microphone or camera on this device."
            : "WaveChat could not find a microphone on this device.";
    }
    if (name === "notreadableerror" || name === "trackstarterror") {
        return "WaveChat could not access your microphone or camera because another app is using it.";
    }
    return error?.message || "WaveChat could not access your microphone or camera.";
}

function formatCallDuration(totalSeconds) {
    const seconds = Math.max(0, Number(totalSeconds) || 0);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    if (hours) {
        return String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + ":" + String(remainingSeconds).padStart(2, "0");
    }
    return String(minutes).padStart(2, "0") + ":" + String(remainingSeconds).padStart(2, "0");
}

function clearCallTimer() {
    if (state.callTimerId) {
        window.clearInterval(state.callTimerId);
        state.callTimerId = null;
    }
}

function startCallTimer() {
    clearCallTimer();
    if (!state.callStartedAt) {
        return;
    }
    state.callTimerId = window.setInterval(() => {
        if (state.activeCall?.status === "connected" && refs.callMeta) {
            refs.callMeta.textContent = getCallMetaText(state.activeCall);
        }
    }, 1000);
}

function formatCallReason(reason) {
    const normalized = String(reason || "ended").trim().toLowerCase();
    if (normalized === "busy") {
        return "The contact is already on another call.";
    }
    if (normalized === "declined") {
        return "The call was declined.";
    }
    if (normalized === "unavailable") {
        return "The contact is offline right now.";
    }
    if (normalized === "unsupported") {
        return "This device cannot complete the call.";
    }
    if (normalized === "device-error") {
        return "Camera or microphone access was blocked.";
    }
    if (normalized === "ended") {
        return "Call ended.";
    }
    return reason || "Call ended.";
}

function getCallHeadline(call) {
    if (!call) {
        return "Start a voice or video call when both people are online.";
    }
    if (call.status === "incoming") {
        return (call.remoteName || "A contact") + " is calling you.";
    }
    if (call.status === "dialing") {
        return "Preparing your call...";
    }
    if (call.status === "ringing") {
        return "Ringing the other side...";
    }
    if (call.status === "connecting") {
        return "Joining the secure media channel...";
    }
    if (call.status === "connected") {
        return call.callType === "video" ? "Video call live." : "Voice call live.";
    }
    return "Call ready.";
}

function getCallMetaText(call) {
    if (!call) {
        return "Ready";
    }
    const pieces = [call.callType === "video" ? "Video call" : "Voice call"];
    if (call.status === "connected" && state.callStartedAt) {
        const elapsed = Math.floor((Date.now() - state.callStartedAt) / 1000);
        pieces.push(formatCallDuration(elapsed));
    } else if (call.status === "incoming") {
        pieces.push("Incoming");
    } else if (call.direction === "outgoing") {
        pieces.push("Outgoing");
    }
    return pieces.join(" / ");
}

function syncMediaPlayback(element) {
    if (!element?.srcObject) {
        return;
    }
    if (element.readyState >= 2 && element.paused === false) {
        return;
    }
    const playback = element.play();
    if (playback?.catch) {
        playback.catch(() => undefined);
    }
}

function bindMediaStream(element, stream) {
    if (!element) {
        return;
    }
    if (element.srcObject !== stream) {
        element.srcObject = stream;
    }
    if (stream) {
        syncMediaPlayback(element);
    }
}

function stopMediaStream(stream) {
    stream?.getTracks().forEach((track) => track.stop());
}

function resetCallMediaElements() {
    if (refs.localVideo) {
        refs.localVideo.srcObject = null;
        refs.localVideo.classList.add("hidden");
    }
    if (refs.remoteVideo) {
        refs.remoteVideo.srcObject = null;
        refs.remoteVideo.classList.add("hidden");
    }
    if (refs.remoteAudio) {
        refs.remoteAudio.srcObject = null;
    }
}

function ensureRemoteStream() {
    if (!state.remoteStream) {
        state.remoteStream = new MediaStream();
    }
    if (refs.remoteVideo) {
        bindMediaStream(refs.remoteVideo, state.remoteStream);
    }
    if (refs.remoteAudio) {
        bindMediaStream(refs.remoteAudio, state.remoteStream);
    }
    return state.remoteStream;
}

function updateCallUi() {
    const call = state.activeCall;
    if (!refs.callPanel || !refs.callModeBadge || !refs.callMeta || !refs.callName || !refs.callStatusText || !refs.callAvatar || !refs.callPlaceholder || !refs.incomingCallActions || !refs.callControls || !refs.toggleMicButton || !refs.toggleCameraButton || !refs.localVideo || !refs.remoteVideo) {
        return;
    }
    refs.callPanel.classList.toggle("hidden", !call);

    if (!call) {
        clearCallTimer();
        resetCallMediaElements();
        refs.callModeBadge.textContent = "Voice call";
        refs.callMeta.textContent = "Ready";
        refs.callName.textContent = "No active call";
        refs.callStatusText.textContent = "Start a voice or video call when both people are online.";
        refs.callAvatar.textContent = "W";
        refs.callAvatar.style.background = "#128C7E";
        refs.callPlaceholder.classList.remove("hidden");
        refs.incomingCallActions.classList.add("hidden");
        refs.callControls.classList.add("hidden");
        refs.toggleMicButton.classList.remove("active");
        refs.toggleCameraButton.classList.remove("active");
        refs.toggleMicButton.textContent = "Mute mic";
        refs.toggleCameraButton.textContent = "Camera off";
        refs.toggleCameraButton.disabled = true;
        return;
    }

    const chat = state.chats.get(call.chatId);
    const displayName = formatDisplayText(call.remoteName || getUserPrimaryText(chat?.counterpart, "Contact"), "Contact");
    const avatarLabel = createAvatarLabel(displayName);
    const avatarColor = call.remoteAvatarColor || chat?.counterpart?.avatarColor || "#128C7E";
    const audioTracks = state.localStream?.getAudioTracks() || [];
    const videoTracks = state.localStream?.getVideoTracks() || [];
    const micEnabled = audioTracks.some((track) => track.enabled);
    const cameraEnabled = videoTracks.some((track) => track.enabled);
    const hasRemoteVideo = call.callType === "video" && Boolean(call.hasRemoteVideo);
    const hasLocalVideo = call.callType === "video" && Boolean(call.hasLocalVideo);

    refs.callModeBadge.textContent = call.callType === "video" ? "Video call" : "Voice call";
    refs.callMeta.textContent = getCallMetaText(call);
    refs.callName.textContent = displayName;
    refs.callStatusText.textContent = getCallHeadline(call);
    refs.callAvatar.textContent = avatarLabel;
    refs.callAvatar.style.background = avatarColor;

    refs.incomingCallActions.classList.toggle("hidden", call.status !== "incoming");
    refs.callControls.classList.toggle("hidden", call.status === "incoming");
    refs.toggleMicButton.textContent = micEnabled ? "Mute mic" : "Unmute mic";
    refs.toggleMicButton.classList.toggle("active", !micEnabled && audioTracks.length > 0);
    refs.toggleMicButton.disabled = call.status === "incoming" || !audioTracks.length;
    refs.toggleCameraButton.textContent = cameraEnabled ? "Camera off" : "Camera on";
    refs.toggleCameraButton.classList.toggle("active", !cameraEnabled && videoTracks.length > 0);
    refs.toggleCameraButton.disabled = call.status === "incoming" || call.callType !== "video" || !videoTracks.length;

    refs.callPlaceholder.classList.toggle("hidden", hasRemoteVideo);
    refs.remoteVideo.classList.toggle("hidden", !hasRemoteVideo);
    refs.localVideo.classList.toggle("hidden", !hasLocalVideo);

    if (state.localStream && refs.localVideo) {
        bindMediaStream(refs.localVideo, state.localStream);
    }
    if (state.remoteStream) {
        if (refs.remoteVideo) {
            bindMediaStream(refs.remoteVideo, state.remoteStream);
        }
        if (refs.remoteAudio) {
            bindMediaStream(refs.remoteAudio, state.remoteStream);
        }
    }
}

async function ensureLocalMedia(callType) {
    if (!browserSupportsCalling()) {
        throw new Error("This browser does not support voice or video calls.");
    }

    stopMediaStream(state.localStream);
    state.localStream = null;
    maybeWarnAboutInternetCalling();

    const constraints = {
        audio: {
            echoCancellation: true,
            noiseSuppression: true,
        },
        video: callType === "video"
            ? {
                width: { ideal: 1280 },
                height: { ideal: 720 },
                facingMode: "user",
            }
            : false,
    };

    try {
        state.localStream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
        throw new Error(formatLocalMediaError(error, callType));
    }

    if (state.activeCall) {
        state.activeCall.hasLocalVideo = callType === "video" && state.localStream.getVideoTracks().length > 0;
    }
    bindMediaStream(refs.localVideo, state.localStream);
    updateCallUi();
    return state.localStream;
}

function attachLocalTracks(peerConnection) {
    if (!state.localStream) {
        return;
    }
    state.localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, state.localStream);
    });
}

async function flushPendingIceCandidates() {
    if (!state.peerConnection?.remoteDescription) {
        return;
    }
    while (state.pendingIceCandidates.length) {
        const candidateData = state.pendingIceCandidates.shift();
        try {
            await state.peerConnection.addIceCandidate(createRtcIceCandidate(candidateData));
        } catch (error) {
            console.error(error);
        }
    }
}

async function handleIncomingIceCandidate(candidateData) {
    if (!candidateData) {
        return;
    }
    if (!state.peerConnection || !state.peerConnection.remoteDescription) {
        state.pendingIceCandidates.push(candidateData);
        return;
    }
    try {
        await state.peerConnection.addIceCandidate(createRtcIceCandidate(candidateData));
    } catch (error) {
        console.error(error);
    }
}

function handlePeerConnectionStateChange(call) {
    const currentCall = state.activeCall;
    const peerConnection = state.peerConnection;
    if (!currentCall || currentCall.callId !== call.callId || !peerConnection) {
        return;
    }

    const connectionState = String(peerConnection.connectionState || "").toLowerCase();
    const iceState = String(peerConnection.iceConnectionState || "").toLowerCase();

    if (connectionState === "connected" || iceState === "connected" || iceState === "completed") {
        currentCall.status = "connected";
        if (!state.callStartedAt) {
            state.callStartedAt = Date.now();
        }
        startCallTimer();
        updateConversationHeader(state.chats.get(state.activeChatId));
        updateCallUi();
        return;
    }

    if (connectionState === "failed" || iceState === "failed") {
        teardownActiveCall({
            notifyPeer: true,
            reason: "ended",
            toastMessage: getCallFailureToast(),
            tone: "error",
        });
        return;
    }

    if (currentCall.status !== "incoming" && (
        connectionState === "connecting"
        || iceState === "checking"
        || iceState === "new"
        || connectionState === "disconnected"
        || iceState === "disconnected"
    )) {
        currentCall.status = "connecting";
    }

    updateConversationHeader(state.chats.get(state.activeChatId));
    updateCallUi();
}

function createPeerConnection(call) {
    const PeerConnection = getPeerConnectionConstructor();
    if (!PeerConnection) {
        throw new Error("This browser does not support voice or video calls.");
    }

    if (state.peerConnection) {
        try {
            state.peerConnection.close();
        } catch (_error) {
            // Ignore stale peer connection shutdown failures.
        }
    }

    state.peerConnection = new PeerConnection(RTC_CONFIGURATION);
    state.remoteStream = new MediaStream();
    if (refs.remoteVideo) {
        bindMediaStream(refs.remoteVideo, state.remoteStream);
    }
    if (refs.remoteAudio) {
        bindMediaStream(refs.remoteAudio, state.remoteStream);
    }
    attachLocalTracks(state.peerConnection);

    state.peerConnection.onicecandidate = (event) => {
        if (!event.candidate || !state.socketConnected || !state.activeCall || state.activeCall.callId !== call.callId) {
            return;
        }
        state.socket.emit("call:ice_candidate", {
            chatId: call.chatId,
            callId: call.callId,
            candidate: event.candidate.toJSON ? event.candidate.toJSON() : event.candidate,
        });
    };

    state.peerConnection.onicecandidateerror = (event) => {
        console.warn("[wavechat] ICE candidate error", event);
    };

    state.peerConnection.ontrack = (event) => {
        const remoteStream = ensureRemoteStream();
        if (event.streams?.[0]) {
            event.streams[0].getTracks().forEach((track) => {
                if (!remoteStream.getTracks().some((item) => item.id === track.id)) {
                    remoteStream.addTrack(track);
                }
            });
        } else if (event.track && !remoteStream.getTracks().some((item) => item.id === event.track.id)) {
            remoteStream.addTrack(event.track);
        }
        if (state.activeCall?.callId === call.callId && (event.track?.kind === "video" || event.streams?.[0]?.getVideoTracks?.().length)) {
            state.activeCall.hasRemoteVideo = true;
        }
        updateCallUi();
    };

    state.peerConnection.onconnectionstatechange = () => {
        handlePeerConnectionStateChange(call);
    };
    state.peerConnection.oniceconnectionstatechange = () => {
        handlePeerConnectionStateChange(call);
    };

    return state.peerConnection;
}

function teardownActiveCall(options = {}) {
    const { notifyPeer = false, reason = "ended", toastMessage = "", tone = "info" } = options;
    const call = state.activeCall;

    if (notifyPeer && call && state.socket && state.socketConnected) {
        state.socket.emit("call:end", {
            chatId: call.chatId,
            callId: call.callId,
            reason,
        });
    }

    if (call) {
        recordCallHistory(call, reason);
    }

    clearCallTimer();
    if (state.peerConnection) {
        try {
            state.peerConnection.onicecandidate = null;
            state.peerConnection.ontrack = null;
            state.peerConnection.onconnectionstatechange = null;
            state.peerConnection.close();
        } catch (_error) {
            // Ignore shutdown race conditions.
        }
    }

    state.peerConnection = null;
    stopMediaStream(state.localStream);
    stopMediaStream(state.remoteStream);
    state.localStream = null;
    state.remoteStream = null;
    state.pendingIceCandidates = [];
    state.callStartedAt = null;
    state.activeCall = null;
    resetCallMediaElements();
    window.setTimeout(() => {
        void refreshBootstrap().then(() => {
            renderSelfProfile();
            renderChatList();
        }).catch(() => undefined);
    }, 250);
    updateCallUi();
    updateConversationHeader(state.chats.get(state.activeChatId));
    updateInfoDrawer(state.chats.get(state.activeChatId));
    renderChatList();

    if (toastMessage) {
        showToast(toastMessage, tone);
    }
}

async function startOutgoingCall(callType) {
    ensureSocketReady();
    if (!CALL_TYPES.has(callType)) {
        throw new Error("Unsupported call type.");
    }
    if (!browserSupportsCalling()) {
        throw new Error("This browser does not support voice or video calls.");
    }
    if (state.activeCall) {
        throw new Error("Finish the current call before starting another one.");
    }

    const chat = state.chats.get(state.activeChatId);
    if (!chat) {
        throw new Error("Choose a chat first.");
    }
    if (!chat.counterpart?.isOnline) {
        throw new Error("This contact is offline right now. Calls work when both people are online.");
    }

    const call = {
        callId: crypto.randomUUID(),
        chatId: chat.id,
        callType,
        direction: "outgoing",
        status: "dialing",
        remoteUserId: chat.counterpart?.id || null,
        remoteName: chat.counterpart?.displayName || chat.counterpart?.phoneNumber || "Contact",
        remoteAvatarColor: chat.counterpart?.avatarColor || "#128C7E",
        hasLocalVideo: callType === "video",
        hasRemoteVideo: false,
        startedAt: new Date().toISOString(),
        historyLogged: false,
    };

    state.activeCall = call;
    state.callStartedAt = null;
    state.pendingIceCandidates = [];
    setCallMenuOpen(false);
    setInfoDrawerOpen(false);
    updateConversationHeader(chat);
    updateCallUi();

    try {
        await ensureLocalMedia(callType);
        const peerConnection = createPeerConnection(call);
        const offer = await peerConnection.createOffer({
            offerToReceiveAudio: true,
            offerToReceiveVideo: callType === "video",
        });
        await peerConnection.setLocalDescription(offer);
        call.status = "ringing";
        updateConversationHeader(chat);
        updateCallUi();
        state.socket.emit("call:start", {
            chatId: chat.id,
            callId: call.callId,
            callType,
            offer: peerConnection.localDescription?.toJSON ? peerConnection.localDescription.toJSON() : offer,
        });
    } catch (error) {
        teardownActiveCall();
        throw error;
    }
}

async function acceptIncomingCall() {
    ensureSocketReady();
    const call = state.activeCall;
    if (!call || call.status !== "incoming") {
        return;
    }

    try {
        call.status = "connecting";
        updateConversationHeader(state.chats.get(call.chatId));
        updateCallUi();

        await ensureLocalMedia(call.callType);
        const peerConnection = createPeerConnection(call);
        await peerConnection.setRemoteDescription(createRtcSessionDescription(call.offer));
        await flushPendingIceCandidates();
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        state.socket.emit("call:answer", {
            chatId: call.chatId,
            callId: call.callId,
            answer: peerConnection.localDescription?.toJSON ? peerConnection.localDescription.toJSON() : answer,
        });
        updateConversationHeader(state.chats.get(call.chatId));
        updateCallUi();
    } catch (error) {
        if (state.socket && state.socketConnected) {
            state.socket.emit("call:reject", {
                chatId: call.chatId,
                callId: call.callId,
                reason: "device-error",
            });
        }
        teardownActiveCall({ toastMessage: error.message, tone: "error" });
    }
}

function rejectIncomingCall(reason = "declined", toastMessage = "") {
    const call = state.activeCall;
    if (!call) {
        return;
    }
    if (state.socket && state.socketConnected) {
        state.socket.emit("call:reject", {
            chatId: call.chatId,
            callId: call.callId,
            reason,
        });
    }
    teardownActiveCall({ reason, toastMessage, tone: reason === "busy" ? "error" : "info" });
}

function toggleMicrophone() {
    const audioTracks = state.localStream?.getAudioTracks() || [];
    if (!audioTracks.length) {
        return;
    }
    const disableTracks = audioTracks.every((track) => track.enabled !== false);
    audioTracks.forEach((track) => {
        track.enabled = !disableTracks;
    });
    updateCallUi();
}

function toggleCamera() {
    const videoTracks = state.localStream?.getVideoTracks() || [];
    if (!videoTracks.length) {
        return;
    }
    const disableTracks = videoTracks.every((track) => track.enabled !== false);
    videoTracks.forEach((track) => {
        track.enabled = !disableTracks;
    });
    updateCallUi();
}

function maybeNotifyIncomingCall(call) {
    if (!("Notification" in window) || Notification.permission !== "granted") {
        return;
    }
    if (document.visibilityState === "visible") {
        return;
    }
    new Notification(formatDisplayText(call.remoteName || "", "Incoming call"), {
        body: call.callType === "video" ? "Incoming video call" : "Incoming voice call",
    });
}

async function handleIncomingCall(data) {
    if (!browserSupportsCalling()) {
        if (state.socket && state.socketConnected) {
            state.socket.emit("call:reject", {
                chatId: data.chatId,
                callId: data.callId,
                reason: "unsupported",
            });
        }
        showToast("This browser does not support voice or video calls.", "error");
        return;
    }

    if (!state.chats.has(data.chatId)) {
        await refreshBootstrap();
    }

    const chat = state.chats.get(data.chatId);
    if (!chat) {
        return;
    }

    if (state.activeCall && state.activeCall.callId !== data.callId) {
        if (state.socket && state.socketConnected) {
            state.socket.emit("call:reject", {
                chatId: data.chatId,
                callId: data.callId,
                reason: "busy",
            });
        }
        showToast("Missed call while another call was active.", "error");
        return;
    }

    if (state.activeChatId !== data.chatId) {
        await selectChat(data.chatId);
    }

    state.activeCall = {
        callId: data.callId,
        chatId: data.chatId,
        callType: CALL_TYPES.has(data.callType) ? data.callType : "voice",
        direction: "incoming",
        status: "incoming",
        remoteUserId: data.caller?.id || chat.counterpart?.id || null,
        remoteName: data.caller?.displayName || data.caller?.phoneNumber || chat.counterpart?.displayName || chat.counterpart?.phoneNumber || "Contact",
        remoteAvatarColor: data.caller?.avatarColor || chat.counterpart?.avatarColor || "#128C7E",
        offer: data.offer,
        hasLocalVideo: false,
        hasRemoteVideo: false,
        startedAt: new Date().toISOString(),
        historyLogged: false,
    };
    state.pendingIceCandidates = [];
    state.callStartedAt = null;
    setCallMenuOpen(false);
    setInfoDrawerOpen(false);
    updateConversationHeader(chat);
    updateCallUi();
    maybeNotifyIncomingCall(state.activeCall);

    if (state.socket && state.socketConnected) {
        state.socket.emit("call:ringing", {
            chatId: data.chatId,
            callId: data.callId,
            callType: state.activeCall.callType,
        });
    }
}

async function handleCallAnswered(data) {
    if (!state.activeCall || state.activeCall.callId !== data.callId) {
        return;
    }
    try {
        if (!state.peerConnection) {
            createPeerConnection(state.activeCall);
        }
        await state.peerConnection.setRemoteDescription(createRtcSessionDescription(data.answer));
        await flushPendingIceCandidates();
        state.activeCall.status = "connecting";
        updateConversationHeader(state.chats.get(state.activeChatId));
        updateCallUi();
    } catch (_error) {
        teardownActiveCall({
            notifyPeer: true,
            reason: "ended",
            toastMessage: "Unable to complete the call handshake.",
            tone: "error",
        });
    }
}

function formatTime(isoString) {
    if (!isoString) {
        return "";
    }
    return new Date(isoString).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatDateTime(isoString) {
    if (!isoString) {
        return "";
    }
    return new Date(isoString).toLocaleString([], {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function formatStatus(chat) {
    if (!chat?.counterpart) {
        return "No contact selected.";
    }
    if (isWaveBotChat(chat)) {
        return "assistant chat";
    }
    if (state.activeCall?.chatId === chat.id) {
        return getCallHeadline(state.activeCall);
    }
    if (state.typingState.get(chat.id)?.isTyping) {
        return "typing...";
    }
    if (chat.counterpart.isOnline) {
        return "online";
    }
    if (chat.counterpart.lastSeenAt) {
        return "last seen " + formatDateTime(chat.counterpart.lastSeenAt);
    }
    if (state.pollingMode && !state.socketConnected) {
        return "Sync mode active";
    }
    return state.socketConnected ? "offline" : "Connecting to realtime service...";
}

function createAvatarLabel(nameOrPhone) {
    return (nameOrPhone || "?").trim().charAt(0).toUpperCase() || "?";
}

async function apiFetch(path, options = {}) {
    const method = options.method || "GET";
    const headers = { Accept: "application/json", ...(options.headers || {}) };
    let body = options.body;

    if (!["GET", "HEAD"].includes(method.toUpperCase())) {
        headers["X-CSRFToken"] = state.csrfToken;
    }

    if (body && !(body instanceof FormData)) {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(body);
    }

    const response = await fetch(path, {
        method,
        body,
        headers,
        credentials: "same-origin",
    });

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        if (response.status === 401) {
            window.location.href = "/";
        }
        const raw = await response.text();
        throw new Error(`Unexpected server response: ${raw.slice(0, 120)}`);
    }

    const data = await response.json();
    if (!response.ok || data.ok === false) {
        throw new Error(data.error || "Request failed.");
    }
    return data;
}

function getChatMessages(chatId) {
    if (!state.messages.has(chatId)) {
        state.messages.set(chatId, []);
    }
    return state.messages.get(chatId);
}

function sortMessages(list) {
    list.sort((left, right) => {
        const leftId = left.id ?? Number.MAX_SAFE_INTEGER;
        const rightId = right.id ?? Number.MAX_SAFE_INTEGER;
        return leftId - rightId;
    });
}

function upsertMessage(messageData, options = {}) {
    const chatId = messageData.chatId;
    const list = getChatMessages(chatId);
    let existing = list.find(
        (item) => item.id === messageData.id || item.clientMessageId === messageData.clientMessageId,
    );

    const isNew = !existing;
    if (existing) {
        Object.assign(existing, messageData);
    } else {
        existing = { ...messageData };
        list.push(existing);
        sortMessages(list);
    }

    const chat = state.chats.get(chatId);
    if (chat) {
        chat.lastMessage = existing;
        chat.updatedAt = existing.createdAt;
        if (isNew && !existing.fromSelf && !options.suppressUnread && state.activeChatId !== chatId) {
            chat.unreadCount = (chat.unreadCount || 0) + 1;
        }
    }

    return existing;
}

function refreshChatMessages(chatId, messageItems) {
    const existingList = getChatMessages(chatId);
    const oldestFetchedId = messageItems[0]?.id ?? null;
    const preservedOlder = oldestFetchedId === null
        ? []
        : existingList.filter((item) => item.id && item.id < oldestFetchedId);
    const refreshed = [...preservedOlder];

    messageItems.forEach((messageData) => {
        const existing = existingList.find(
            (item) => item.id === messageData.id || item.clientMessageId === messageData.clientMessageId,
        );
        if (existing) {
            Object.assign(existing, messageData);
            refreshed.push(existing);
            return;
        }
        refreshed.push({ ...messageData });
    });

    sortMessages(refreshed);
    state.messages.set(chatId, refreshed);

    const chat = state.chats.get(chatId);
    if (chat && refreshed.length) {
        const latestMessage = refreshed[refreshed.length - 1];
        chat.lastMessage = latestMessage;
        chat.updatedAt = latestMessage.createdAt;
    }

    return refreshed;
}

function buildPlainMessagePayload(message) {
    const existingPlain = message?.plain && typeof message.plain === "object" ? { ...message.plain } : {};
    if (message?.kind === "media") {
        return {
            ...existingPlain,
            messageType: "media",
            caption: existingPlain.caption ?? message.caption ?? message.ciphertext ?? "",
            mimeType: existingPlain.mimeType ?? message.mimeType ?? message.iv ?? "application/octet-stream",
            fileName: existingPlain.fileName ?? message.fileName ?? "attachment",
            fileSize: existingPlain.fileSize ?? message.fileSize ?? null,
        };
    }
    return {
        ...existingPlain,
        messageType: "text",
        text: existingPlain.text ?? message?.text ?? message?.ciphertext ?? "",
    };
}

async function hydrateMessage(message) {
    if (!message) {
        return message;
    }
    message.plain = buildPlainMessagePayload(message);
    message.decryptError = false;
    message.hydrated = true;
    message.hydrationPromise = null;
    return message;
}

function getMessagePreview(message) {
    if (!message) {
        return "No messages yet.";
    }
    const plain = message.plain || buildPlainMessagePayload(message);
    if (plain.messageType === "media") {
        return plain.caption || plain.fileName || "Media message";
    }
    return plain.text || "Message";
}

function receiptLabel(message) {
    if (!message.fromSelf) {
        return "";
    }
    if (message.readAt) {
        return "Read";
    }
    if (message.deliveredAt) {
        return "Delivered";
    }
    return "Sent";
}

function updateConversationHeader(chat) {
    refs.conversationPane?.classList.toggle("conversation-empty", !chat);

    if (!chat) {
        refs.conversationAvatar.textContent = "W";
        refs.conversationAvatar.style.background = "#128C7E";
        refs.conversationTitle.textContent = "Select a chat";
        refs.conversationStatus.textContent = "Send messages, photos, videos and files instantly.";
        setCallMenuOpen(false);
        updateConversationControls(null);
        updateInfoDrawer(null);
        return;
    }

    refs.conversationAvatar.textContent = createAvatarLabel(getUserPrimaryText(chat.counterpart, "Contact"));
    refs.conversationAvatar.style.background = chat.counterpart?.avatarColor || "#128C7E";
    refs.conversationTitle.textContent = getUserPrimaryText(chat.counterpart, "Unknown");
    refs.conversationStatus.textContent = formatStatus(chat);
    updateConversationControls(chat);
    updateCallMenu(chat);
    updateInfoDrawer(chat);
}
function ensureSocketReady() {
    if (!state.socket) {
        throw new Error("Realtime chat is not initialized yet. Refresh the page and wait a second.");
    }
    if (!state.socketConnected) {
        throw new Error(state.lastRealtimeError || "Realtime chat is still connecting. Please wait a moment and try again.");
    }
}

function clearRealtimeWatchdog() {
    if (state.connectWatchdogId) {
        window.clearTimeout(state.connectWatchdogId);
        state.connectWatchdogId = null;
    }
}

function scheduleRealtimeWatchdog() {
    clearRealtimeWatchdog();
    state.connectWatchdogId = window.setTimeout(() => {
        if (state.socketConnected) {
            return;
        }
        state.lastRealtimeError = "Realtime server unreachable. Falling back to background sync.";
        updateSelfStatus();
        updateComposerState();
        updateConversationHeader(state.chats.get(state.activeChatId));
        startPollingFallback(state.lastRealtimeError);
        if (!state.connectionNoticeShown) {
            showToast(state.lastRealtimeError, "error");
            state.connectionNoticeShown = true;
        }
    }, 6000);
}

function stopPollingFallback() {
    if (state.pollBootstrapTimer) {
        window.clearInterval(state.pollBootstrapTimer);
        state.pollBootstrapTimer = null;
    }
    if (state.pollMessagesTimer) {
        window.clearInterval(state.pollMessagesTimer);
        state.pollMessagesTimer = null;
    }
    state.pollingMode = false;
    state.lastPollingAt = null;
}

async function syncActiveChatMessages() {
    const chat = state.chats.get(state.activeChatId);
    if (!chat) {
        return;
    }
    if (isVirtualChat(chat)) {
        await Promise.all(getChatMessages(chat.id).map((message) => hydrateMessage(message)));
        await renderMessages();
        updateConversationHeader(chat);
        return;
    }
    const data = await apiFetch(`/api/chats/${chat.id}/messages`);
    chat.hasMore = data.hasMore;
    refreshChatMessages(chat.id, data.messages || []);
    await Promise.all(getChatMessages(chat.id).map((message) => hydrateMessage(message)));
    await renderMessages();
    updateConversationHeader(chat);
}

async function runPollingSync() {
    await refreshBootstrap();
    renderSelfProfile();
    renderChatList();
    if (state.activeChatId) {
        await syncActiveChatMessages();
        await markActiveChatRead();
    }
    updateConversationHeader(state.chats.get(state.activeChatId) || null);
    updateComposerState();
    updateSelfStatus();
    state.lastPollingAt = Date.now();
}

function startPollingFallback(reason = "") {
    if (reason) {
        state.lastRealtimeError = reason;
    }
    const wasInactive = !state.pollingMode;
    state.pollingMode = true;
    clearRealtimeWatchdog();
    updateSelfStatus();
    updateComposerState();
    updateConversationHeader(state.chats.get(state.activeChatId));

    if (!state.pollBootstrapTimer) {
        state.pollBootstrapTimer = window.setInterval(() => {
            void runPollingSync().catch((error) => {
                console.error(error);
            });
        }, 5000);
    }
    if (!state.pollMessagesTimer) {
        state.pollMessagesTimer = window.setInterval(() => {
            if (!state.activeChatId) {
                return;
            }
            void syncActiveChatMessages().catch((error) => {
                console.error(error);
            });
        }, 2500);
    }

    void runPollingSync().catch((error) => {
        console.error(error);
    });

    if (wasInactive && !state.connectionNoticeShown) {
        showToast("Live socket unavailable. Using background sync.", "info");
        state.connectionNoticeShown = true;
    }
}

async function applySentMessage(messageData) {
    if (!messageData) {
        return;
    }

    const message = upsertMessage(messageData, { suppressUnread: true });
    await hydrateMessage(message);

    const chat = state.chats.get(message.chatId);
    if (chat) {
        chat.lastMessage = message;
        chat.unreadCount = 0;
    }

    renderChatList();
    if (state.activeChatId === message.chatId) {
        await renderMessages();
        scrollToBottom();
        updateConversationHeader(chat || null);
        updateInfoDrawer(chat || null);
    }
}

function matchesMessageSearch(message) {
    const query = refs.messageSearch.value.trim().toLowerCase();
    if (!query) {
        return true;
    }
    const parts = [];
    if (message.plain?.text) {
        parts.push(message.plain.text);
    }
    if (message.plain?.caption) {
        parts.push(message.plain.caption);
    }
    if (message.plain?.fileName) {
        parts.push(message.plain.fileName);
    }
    return parts.join(" ").toLowerCase().includes(query);
}

async function ensureMediaBlob(message) {
    if (!message?.mediaUrl) {
        return null;
    }
    if (state.mediaCache.has(message.id)) {
        return state.mediaCache.get(message.id);
    }

    const response = await fetch(message.mediaUrl, { credentials: "same-origin" });
    if (!response.ok) {
        throw new Error("Unable to download attachment.");
    }

    const blob = await response.blob();
    const cached = { blob, url: URL.createObjectURL(blob) };
    state.mediaCache.set(message.id, cached);
    return cached;
}

function getMessageGroupRole(list, index) {
    const current = list[index];
    if (!current) {
        return "single";
    }

    const previous = list[index - 1] || null;
    const next = list[index + 1] || null;
    const currentTime = new Date(current.createdAt || 0).getTime();

    const isGroupedWith = (candidate) => {
        if (!candidate) {
            return false;
        }
        if (Boolean(candidate.fromSelf) !== Boolean(current.fromSelf)) {
            return false;
        }
        const candidateTime = new Date(candidate.createdAt || 0).getTime();
        return Math.abs(currentTime - candidateTime) <= MESSAGE_GROUP_GAP_MS;
    };

    const withPrevious = isGroupedWith(previous);
    const withNext = isGroupedWith(next);

    if (withPrevious && withNext) {
        return "middle";
    }
    if (withPrevious) {
        return "end";
    }
    if (withNext) {
        return "start";
    }
    return "single";
}

function buildMessageSideSlot(chat, showAvatar) {
    const slot = document.createElement("div");
    slot.className = "message-side-slot" + (showAvatar ? "" : " placeholder");

    const avatar = document.createElement("div");
    avatar.className = "avatar message-side-avatar";
    avatar.textContent = createAvatarLabel(getUserPrimaryText(chat?.counterpart, "Contact"));
    avatar.style.background = chat?.counterpart?.avatarColor || "#128C7E";
    slot.appendChild(avatar);
    return slot;
}

function buildTypingIndicatorRow(chat) {
    const row = document.createElement("article");
    row.className = "message-row other typing-row";
    row.appendChild(buildMessageSideSlot(chat, true));

    const bubble = document.createElement("div");
    bubble.className = "message-bubble typing-bubble";

    const dots = document.createElement("div");
    dots.className = "typing-dots";
    for (let index = 0; index < 3; index += 1) {
        const dot = document.createElement("span");
        dot.className = "typing-dot";
        dots.appendChild(dot);
    }

    bubble.appendChild(dots);
    row.appendChild(bubble);
    return row;
}
function buildMetaLine(message) {
    const meta = document.createElement("div");
    meta.className = "message-meta";

    const time = document.createElement("span");
    time.className = "message-meta-time";
    time.textContent = formatTime(message.createdAt);
    meta.appendChild(time);

    if (message.fromSelf) {
        const receipt = receiptLabel(message);
        const receiptBadge = document.createElement("span");
        receiptBadge.className = `message-receipt ${receipt === "Read" ? "is-read" : ""}`.trim();
        receiptBadge.textContent = receipt === "Sent" ? "\u2713" : "\u2713\u2713";
        receiptBadge.title = receipt;
        meta.appendChild(receiptBadge);
    }

    return meta;
}

function buildMessageActionButton(icon, label, handler) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "message-action-btn";
    button.title = label;
    button.setAttribute("aria-label", label);
    button.innerHTML = `${icon}<span class="sr-only">${label}</span>`;
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        void handler();
    });
    return button;
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast("Copied to clipboard.");
    } catch (_error) {
        showToast("Clipboard access was blocked.", "error");
    }
}

function buildMessageActions(message) {
    const actions = document.createElement("div");
    actions.className = "message-actions";

    if (message.plain?.messageType === "text" && message.plain?.text) {
        actions.appendChild(
            buildMessageActionButton(MESSAGE_ACTION_ICON_COPY, "Copy message", async () => {
                await copyToClipboard(message.plain.text);
            }),
        );
    }

    if (message.plain?.messageType === "media" && message.mediaUrl) {
        actions.appendChild(
            buildMessageActionButton(MESSAGE_ACTION_ICON_SAVE, "Save attachment", async () => {
                try {
                    const media = await ensureMediaBlob(message);
                    const link = document.createElement("a");
                    link.href = media.url;
                    link.download = message.plain?.fileName || "attachment";
                    link.click();
                } catch (error) {
                    showToast(error.message, "error");
                }
            }),
        );
    }

    return actions.childElementCount ? actions : null;
}

function buildReactionRow(message) {
    const reactions = message?.reactions;
    if (!reactions) {
        return null;
    }

    const entries = Array.isArray(reactions)
        ? reactions
        : Object.entries(reactions).map(([emoji, count]) => ({ emoji, count }));

    const normalized = entries
        .map((entry) => {
            if (!entry) {
                return null;
            }
            if (typeof entry === "string") {
                return { emoji: entry, count: 1 };
            }
            const emoji = String(entry.emoji || entry.label || "").trim();
            const count = Number(entry.count || 0) || 1;
            return emoji ? { emoji, count } : null;
        })
        .filter(Boolean);

    if (!normalized.length) {
        return null;
    }

    const row = document.createElement("div");
    row.className = "message-reactions";

    normalized.forEach((entry) => {
        const chip = document.createElement("span");
        chip.className = "message-reaction-chip";
        chip.textContent = `${entry.emoji}${entry.count > 1 ? ` ${entry.count}` : ""}`;
        row.appendChild(chip);
    });

    return row;
}
async function buildMediaContent(message, bubble) {
    const wrapper = document.createElement("div");
    wrapper.className = "media-wrapper";
    const isImage = message.plain?.mimeType?.startsWith("image/");
    const isVideo = message.plain?.mimeType?.startsWith("video/");
    const isAudio = message.plain?.mimeType?.startsWith("audio/");

    if (isImage) {
        try {
            const media = await ensureMediaBlob(message);
            const image = document.createElement("img");
            image.className = "message-image";
            image.src = media.url;
            image.alt = message.plain?.fileName || "Attachment";
            image.addEventListener("click", () => {
                window.open(media.url, "_blank", "noopener");
            });
            wrapper.appendChild(image);
        } catch (_error) {
            const fallback = document.createElement("div");
            fallback.className = "file-card";
            fallback.textContent = "Image preview unavailable on this device.";
            wrapper.appendChild(fallback);
        }
    } else if (isVideo) {
        try {
            const media = await ensureMediaBlob(message);
            const video = document.createElement("video");
            video.className = "message-video";
            video.src = media.url;
            video.controls = true;
            video.playsInline = true;
            video.preload = "metadata";
            wrapper.appendChild(video);
        } catch (_error) {
            const fallback = document.createElement("div");
            fallback.className = "file-card";
            fallback.textContent = "Video preview unavailable on this device.";
            wrapper.appendChild(fallback);
        }
    } else if (isAudio) {
        try {
            const media = await ensureMediaBlob(message);
            const audio = document.createElement("audio");
            audio.className = "message-audio";
            audio.src = media.url;
            audio.controls = true;
            audio.preload = "metadata";
            wrapper.appendChild(audio);
        } catch (_error) {
            const fallback = document.createElement("div");
            fallback.className = "file-card";
            fallback.textContent = "Audio preview unavailable on this device.";
            wrapper.appendChild(fallback);
        }
    } else {
        const fileCard = document.createElement("button");
        fileCard.type = "button";
        fileCard.className = "file-card";
        fileCard.innerHTML = "<strong>File ready</strong><span>Open or download</span>";
        fileCard.addEventListener("click", async () => {
            try {
                const media = await ensureMediaBlob(message);
                const link = document.createElement("a");
                link.href = media.url;
                link.download = message.plain?.fileName || "attachment";
                link.click();
            } catch (error) {
                showToast(error.message, "error");
            }
        });
        wrapper.appendChild(fileCard);
    }

    if (message.plain?.fileName) {
        const fileName = document.createElement("div");
        fileName.className = "file-name";
        fileName.textContent = message.plain.fileName;
        wrapper.appendChild(fileName);
    }

    if (message.plain?.caption) {
        const caption = document.createElement("p");
        caption.className = "message-text";
        caption.textContent = message.plain.caption;
        wrapper.appendChild(caption);
    }

    bubble.appendChild(wrapper);
}
async function renderMessages() {
    const chat = state.chats.get(state.activeChatId);
    refs.messages.innerHTML = "";
    refs.emptyState.classList.toggle("hidden", Boolean(chat));
    refs.loadMoreButton.classList.toggle("hidden", !chat?.hasMore);
    closeMessageActionPeek();

    if (!chat) {
        return;
    }

    const list = getChatMessages(chat.id).filter(matchesMessageSearch);
    if (!list.length) {
        const empty = document.createElement("div");
        empty.className = "list-empty";
        empty.textContent = refs.messageSearch.value.trim()
            ? "No loaded messages match that search."
            : "No messages in this conversation yet.";
        refs.messages.appendChild(empty);
        return;
    }

    let lastDayLabel = "";
    for (let index = 0; index < list.length; index += 1) {
        const message = list[index];
        await hydrateMessage(message);

        const dayLabel = formatDayLabel(message.createdAt);
        if (dayLabel !== lastDayLabel) {
            const separator = document.createElement("div");
            separator.className = "message-day-separator";
            separator.textContent = dayLabel;
            refs.messages.appendChild(separator);
            lastDayLabel = dayLabel;
        }

        const groupRole = getMessageGroupRole(list, index);
        const row = document.createElement("article");
        row.className = `message-row ${message.fromSelf ? "self" : "other"} group-${groupRole}`;
        row.dataset.messageId = String(message.id ?? message.clientMessageId ?? `${index}`);

        if (!message.fromSelf) {
            row.appendChild(buildMessageSideSlot(chat, groupRole === "single" || groupRole === "end"));
        }

        const bubble = document.createElement("div");
        bubble.className = `message-bubble ${message.decryptError ? "message-warning" : ""}`;
        bubble.dataset.messageBubble = "true";
        bubble.tabIndex = 0;

        if (message.decryptError) {
            const warning = document.createElement("p");
            warning.className = "message-text";
            warning.textContent = message.plain?.text || "Unable to decrypt this message.";
            bubble.appendChild(warning);
        } else if (message.plain?.messageType === "media") {
            await buildMediaContent(message, bubble);
        } else {
            const text = document.createElement("p");
            text.className = "message-text";
            text.textContent = message.plain?.text || "";
            bubble.appendChild(text);
        }

        const actions = buildMessageActions(message);
        if (actions) {
            bubble.appendChild(actions);
        }

        const reactions = buildReactionRow(message);
        if (reactions) {
            bubble.appendChild(reactions);
        }

        bubble.appendChild(buildMetaLine(message));
        row.appendChild(bubble);
        refs.messages.appendChild(row);
    }

    if (state.typingState.get(chat.id)?.isTyping && !refs.messageSearch.value.trim()) {
        refs.messages.appendChild(buildTypingIndicatorRow(chat));
    }
}
function scrollToBottom() {
    refs.messagesScroller.scrollTop = refs.messagesScroller.scrollHeight;
}

function closeMessageActionPeek() {
    refs.messages?.querySelectorAll(".message-row.actions-visible").forEach((row) => {
        row.classList.remove("actions-visible");
    });
}

function toggleMessageActionPeek(row) {
    if (!row) {
        return;
    }
    const shouldOpen = !row.classList.contains("actions-visible");
    closeMessageActionPeek();
    if (shouldOpen) {
        row.classList.add("actions-visible");
    }
}

async function markActiveChatRead() {
    const chat = state.chats.get(state.activeChatId);
    if (!chat || document.hidden) {
        return;
    }
    const unread = getChatMessages(chat.id).filter((message) => !message.fromSelf && !message.readAt);
    if (!unread.length) {
        return;
    }

    const now = new Date().toISOString();
    unread.forEach((message) => {
        message.deliveredAt = message.deliveredAt || now;
        message.readAt = now;
    });
    chat.unreadCount = 0;
    if (isWaveBotChat(chat)) {
        syncWaveBotChatMeta();
        renderChatList();
        updateConversationHeader(chat);
        updateInfoDrawer(chat);
        return;
    }
    renderChatList();

    if (state.socket && state.socketConnected) {
        state.socket.emit("messages_read", {
            chatId: chat.id,
            messageIds: unread.map((message) => message.id).filter((id) => Number.isInteger(id)),
        });
        return;
    }

    if (!state.pollingMode) {
        return;
    }

    try {
        const data = await apiFetch(`/api/chats/${chat.id}/read`, {
            method: "POST",
            body: {},
        });
        if (data.readAt) {
            unread.forEach((message) => {
                message.deliveredAt = message.deliveredAt || data.readAt;
                message.readAt = data.readAt;
            });
        }
        updateConversationHeader(chat);
    } catch (error) {
        console.error(error);
    }
}

async function selectChat(chatId) {
    state.activeChatId = chatId;
    syncResponsivePreview();
    refs.emojiBar.classList.add("hidden");
    setCallMenuOpen(false);
    setInfoDrawerOpen(false);
    refs.messageSearch.value = "";
    clearAttachmentPreview();

    const chat = state.chats.get(chatId);
    if (!chat) {
        updateConversationHeader(null);
        updateComposerState();
        return;
    }
    updateConversationHeader(chat);

    if (isVirtualChat(chat)) {
        chat.hasMore = false;
        await Promise.all(getChatMessages(chatId).map((message) => hydrateMessage(message)));
        chat.unreadCount = 0;
        if (isWaveBotChat(chat)) {
            syncWaveBotChatMeta();
        }
        refs.messageInput.value = getDraftText(chatId);
        renderChatList();
        updateComposerState();
        await renderMessages();
        scrollToBottom();
        await markActiveChatRead();
        updateConversationHeader(chat);
        return;
    }

    const data = await apiFetch(`/api/chats/${chatId}/messages`);
    chat.hasMore = data.hasMore;
    const refreshedMessages = refreshChatMessages(chatId, data.messages);
    await Promise.all(refreshedMessages.map((message) => hydrateMessage(message)));

    chat.unreadCount = 0;
    refs.messageInput.value = getDraftText(chatId);
    renderChatList();
    updateComposerState();
    await renderMessages();
    scrollToBottom();
    await markActiveChatRead();
    updateConversationHeader(chat);
}
async function loadOlderMessages() {
    const chat = state.chats.get(state.activeChatId);
    if (!chat || isVirtualChat(chat)) {
        return;
    }
    const list = getChatMessages(chat.id);
    if (!chat?.hasMore || !list.length) {
        return;
    }
    const oldest = list[0];
    const previousHeight = refs.messagesScroller.scrollHeight;
    const data = await apiFetch(`/api/chats/${chat.id}/messages?before=${oldest.id}`);
    chat.hasMore = data.hasMore;
    data.messages.forEach((message) => {
        upsertMessage(message, { suppressUnread: true });
    });
    await Promise.all(getChatMessages(chat.id).map((message) => hydrateMessage(message)));
    await renderMessages();
    refs.messagesScroller.scrollTop = refs.messagesScroller.scrollHeight - previousHeight;
}

function clearAttachmentPreview() {
    state.pendingFile = null;
    refs.fileInput.value = "";
    refs.cameraInput && (refs.cameraInput.value = "");
    refs.attachmentPreview.innerHTML = "";
    refs.attachmentPreview.classList.add("hidden");
    updateComposerSubmitButton();
}

function setPendingAttachment(file) {
    if (!file) {
        clearAttachmentPreview();
        return;
    }
    state.pendingFile = file;
    renderAttachmentPreview(file);
}

function renderAttachmentPreview(file) {
    refs.attachmentPreview.innerHTML = "";
    refs.attachmentPreview.classList.remove("hidden");
    updateComposerSubmitButton();

    const card = document.createElement("div");
    card.className = "attachment-card";

    const title = document.createElement("strong");
    title.textContent = file.name;
    const info = document.createElement("span");
    info.textContent = Math.ceil(file.size / 1024) + " KB";
    card.append(title, info);

    if (file.type.startsWith("image/")) {
        const image = document.createElement("img");
        image.className = "attachment-thumb";
        image.src = URL.createObjectURL(file);
        image.alt = file.name;
        card.appendChild(image);
    } else if (file.type.startsWith("video/")) {
        const video = document.createElement("video");
        video.className = "attachment-thumb-video";
        video.src = URL.createObjectURL(file);
        video.controls = true;
        video.playsInline = true;
        video.preload = "metadata";
        card.appendChild(video);
    } else if (file.type.startsWith("audio/")) {
        const audio = document.createElement("audio");
        audio.className = "attachment-thumb-audio";
        audio.src = URL.createObjectURL(file);
        audio.controls = true;
        audio.preload = "metadata";
        card.appendChild(audio);
    }

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "secondary-btn";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", clearAttachmentPreview);
    card.appendChild(removeButton);

    refs.attachmentPreview.appendChild(card);
}

function isCaptureSurfaceOpen() {
    return Boolean(refs.captureModal && (refs.captureModal.open || refs.captureModal.hasAttribute("open")));
}

function openCaptureSurface() {
    if (!refs.captureModal) {
        return false;
    }
    if (typeof refs.captureModal.showModal === "function") {
        if (!refs.captureModal.open) {
            refs.captureModal.showModal();
        }
    } else {
        refs.captureModal.setAttribute("open", "open");
    }
    return true;
}

function closeCaptureSurface() {
    if (!refs.captureModal) {
        return;
    }
    if (typeof refs.captureModal.close === "function" && refs.captureModal.open) {
        refs.captureModal.close();
        return;
    }
    refs.captureModal.removeAttribute("open");
}

function resetCapturePreview(revokePreview = true) {
    state.captureFile = null;
    if (revokePreview && state.capturePreviewUrl) {
        URL.revokeObjectURL(state.capturePreviewUrl);
    }
    state.capturePreviewUrl = "";
    if (refs.capturePhotoPreview) {
        refs.capturePhotoPreview.src = "";
        refs.capturePhotoPreview.classList.add("hidden");
    }
    if (refs.captureVideoPreview) {
        refs.captureVideoPreview.pause();
        refs.captureVideoPreview.removeAttribute("src");
        refs.captureVideoPreview.load?.();
        refs.captureVideoPreview.classList.add("hidden");
    }
    refs.captureUseButton && (refs.captureUseButton.disabled = true);
}

function stopCaptureStream({ discardRecording = false } = {}) {
    state.captureDiscardRecording = discardRecording;
    if (state.captureRecorder && state.captureRecorder.state !== "inactive") {
        try {
            state.captureRecorder.stop();
        } catch (_error) {
            state.captureRecorder = null;
        }
    }
    if (state.captureRenderId) {
        cancelAnimationFrame(state.captureRenderId);
        state.captureRenderId = null;
    }
    if (state.captureCanvasStream) {
        state.captureCanvasStream.getTracks().forEach((track) => track.stop());
        state.captureCanvasStream = null;
    }
    state.captureCanvas = null;
    if (state.captureStream) {
        state.captureStream.getTracks().forEach((track) => track.stop());
        state.captureStream = null;
    }
    if (refs.captureLive) {
        refs.captureLive.pause?.();
        refs.captureLive.srcObject = null;
    }
}

function updateCaptureControls() {
    refs.captureModal?.querySelectorAll("[data-capture-mode]").forEach((button) => {
        const active = button.dataset.captureMode === state.captureMode;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    refs.captureModal?.querySelectorAll("[data-capture-filter]").forEach((button) => {
        const active = button.dataset.captureFilter === state.captureFilter;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    refs.capturePhotoButton?.classList.toggle("hidden", state.captureMode !== "photo");
    refs.captureRecordButton?.classList.toggle("hidden", state.captureMode !== "video");
    if (refs.captureRecordButton) {
        refs.captureRecordButton.textContent = state.captureRecording ? "Stop recording" : "Start recording";
        refs.captureRecordButton.classList.toggle("recording", state.captureRecording);
    }
    if (refs.captureUseButton) {
        refs.captureUseButton.disabled = !state.captureFile;
    }
    refs.captureFlashButton?.classList.toggle("active", state.captureFlashEnabled);
}

function getCaptureFilterValue(filterId = state.captureFilter) {
    return CAPTURE_FILTERS.find((item) => item.id === filterId)?.filter || "none";
}

function applyCaptureFilter() {
    const filterValue = getCaptureFilterValue();
    if (refs.captureLive) {
        refs.captureLive.style.filter = filterValue;
    }
    if (refs.capturePhotoPreview) {
        refs.capturePhotoPreview.style.filter = filterValue;
    }
    if (refs.captureVideoPreview) {
        refs.captureVideoPreview.style.filter = filterValue;
    }
}

function setCaptureFilter(filterId) {
    if (!CAPTURE_FILTERS.some((item) => item.id === filterId)) {
        return;
    }
    state.captureFilter = filterId;
    applyCaptureFilter();
    updateCaptureControls();
}

async function requestCaptureStream(mode) {function flashCaptureOverlay() {
    if (!refs.captureFlashOverlay) {
        return;
    }
    refs.captureFlashOverlay.classList.add("active");
    window.setTimeout(() => {
        refs.captureFlashOverlay?.classList.remove("active");
    }, 140);
}

async function applyTorchSetting(enabled) {
    const track = state.captureStream?.getVideoTracks?.()[0];
    if (!track?.getCapabilities || !track.applyConstraints) {
        state.captureTorchAvailable = false;
        return false;
    }
    const caps = track.getCapabilities();
    if (!caps.torch) {
        state.captureTorchAvailable = false;
        return false;
    }
    try {
        await track.applyConstraints({ advanced: [{ torch: enabled }] });
        state.captureTorchAvailable = true;
        return true;
    } catch (_error) {
        state.captureTorchAvailable = false;
        return false;
    }
}

async function toggleCaptureFlash() {
    state.captureFlashEnabled = !state.captureFlashEnabled;
    const applied = await applyTorchSetting(state.captureFlashEnabled);
    if (!applied && state.captureFlashEnabled) {
        showToast("Flash is not supported on this device.", "error");
        state.captureFlashEnabled = false;
    }
    updateCaptureControls();
}

async function toggleCaptureFacing() {
    state.captureFacingMode = state.captureFacingMode === "environment" ? "user" : "environment";
    if (isCaptureSurfaceOpen()) {
        await startCaptureStream();
    }
}
    const videoConstraints = {
        facingMode: { ideal: state.captureFacingMode || "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 },
    };
    try {
        return await navigator.mediaDevices.getUserMedia({
            video: videoConstraints,
            audio: mode === "video",
        });
    } catch (error) {
        if (mode === "video") {
            return navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: false });
        }
        throw error;
    }
}

async function startCaptureStream() {
    if (!refs.captureModal) {
        return;
    }
    stopCaptureStream({ discardRecording: true });
    resetCapturePreview();
    state.captureChunks = [];
    state.captureRecording = false;
    updateCaptureControls();

    if (refs.captureStatus) {
        refs.captureStatus.textContent = state.captureMode === "video"
            ? "Record a short video inside the chat."
            : "Frame your photo and tap capture.";
    }
    refs.captureEmpty?.classList.remove("hidden");
    refs.captureLive?.classList.add("hidden");

    try {
        state.captureStream = await requestCaptureStream(state.captureMode);
        if (refs.captureLive) {
            refs.captureLive.srcObject = state.captureStream;
            refs.captureLive.classList.remove("hidden");
        }
        applyCaptureFilter();
        if (state.captureFlashEnabled) {
            await applyTorchSetting(true);
        }
        refs.captureEmpty?.classList.add("hidden");
    } catch (error) {
        console.error(error);
        if (refs.captureStatus) {
            refs.captureStatus.textContent = "Camera or microphone access was blocked. You can still use your device camera.";
        }
        if (refs.captureEmpty) {
            refs.captureEmpty.textContent = "Camera access is unavailable in this browser right now.";
            refs.captureEmpty.classList.remove("hidden");
        }
    }
    updateCaptureControls();
}

function resetCaptureModalState() {
    stopCaptureStream({ discardRecording: true });
    resetCapturePreview();
    state.captureChunks = [];
    state.captureRecording = false;
    if (refs.captureStatus) {
        refs.captureStatus.textContent = "Take a photo or record a video for the current chat.";
    }
    if (refs.captureEmpty) {
        refs.captureEmpty.textContent = "Allow camera access to capture inside the app.";
        refs.captureEmpty.classList.remove("hidden");
    }
    refs.captureLive?.classList.add("hidden");
    updateCaptureControls();
}

async function openCaptureModal(mode = "photo") {
    if (!state.activeChatId) {
        showToast("Choose a chat first.", "error");
        return;
    }
    state.captureMode = mode;
    updateCaptureControls();

    if (!refs.captureModal || !navigator.mediaDevices?.getUserMedia) {
        showCaptureFallbackInput();
        return;
    }

    openCaptureSurface();
    await startCaptureStream();
}

function closeCaptureModal() {
    closeCaptureSurface();
    resetCaptureModalState();
}

function showCaptureFallbackInput() {
    if (!refs.cameraInput) {
        showToast("This browser does not support direct capture here.", "error");
        return;
    }
    refs.cameraInput.accept = state.captureMode === "video" ? "video/*" : "image/*";
    closeCaptureModal();
    refs.cameraInput.click();
}

function setCapturePreviewFile(file) {
    resetCapturePreview();
    state.captureFile = file;
    state.capturePreviewUrl = URL.createObjectURL(file);
    refs.captureLive?.classList.add("hidden");
    refs.captureEmpty?.classList.add("hidden");

    if (file.type.startsWith("image/")) {
        refs.capturePhotoPreview.src = state.capturePreviewUrl;
        refs.capturePhotoPreview.classList.remove("hidden");
    } else {
        refs.captureVideoPreview.src = state.capturePreviewUrl;
        refs.captureVideoPreview.classList.remove("hidden");
    }
    applyCaptureFilter();
    refs.captureUseButton && (refs.captureUseButton.disabled = false);
    updateCaptureControls();
}

async function capturePhotoFrame() {
    if (!state.captureStream) {
        await startCaptureStream();
        if (!state.captureStream) {
            return;
        }
    }
    const live = refs.captureLive;
    if (!live?.videoWidth || !live?.videoHeight) {
        showToast("Wait for the camera preview to load.", "error");
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = live.videoWidth;
    canvas.height = live.videoHeight;
    const context = canvas.getContext("2d");
    context.filter = getCaptureFilterValue();
    if (state.captureFlashEnabled) {
        flashCaptureOverlay();
    }
    context.drawImage(live, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
    if (!blob) {
        throw new Error("Unable to capture a photo right now.");
    }

    const file = new File([blob], "photo-" + Date.now() + ".jpg", { type: "image/jpeg" });
    stopCaptureStream({ discardRecording: true });
    setCapturePreviewFile(file);
    if (refs.captureStatus) {
        refs.captureStatus.textContent = "Photo ready to send.";
    }
}

function getRecorderMimeType() {
    const candidates = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm", "video/mp4"];
    if (typeof MediaRecorder === "undefined") {
        return "";
    }
    return candidates.find((item) => !MediaRecorder.isTypeSupported || MediaRecorder.isTypeSupported(item)) || "";
}

async function startVideoRecording() {
    if (typeof MediaRecorder === "undefined") {
        showCaptureFallbackInput();
        return;
    }
    if (!state.captureStream) {
        await startCaptureStream();
        if (!state.captureStream) {
            return;
        }
    }

    resetCapturePreview();
    state.captureChunks = [];
    state.captureDiscardRecording = false;

    const mimeType = getRecorderMimeType();
    const filterValue = getCaptureFilterValue();
    let recorderStream = state.captureStream;

    if (filterValue !== "none" && refs.captureLive) {
        const live = refs.captureLive;
        const canvas = document.createElement("canvas");
        canvas.width = live.videoWidth || 1280;
        canvas.height = live.videoHeight || 720;
        const context = canvas.getContext("2d");
        state.captureCanvas = canvas;
        state.captureCanvasStream = canvas.captureStream(30);
        const audioTracks = state.captureStream?.getAudioTracks?.() || [];
        audioTracks.forEach((track) => state.captureCanvasStream.addTrack(track));
        const renderFrame = () => {
            if (!state.captureCanvasStream) {
                return;
            }
            context.filter = filterValue;
            context.drawImage(live, 0, 0, canvas.width, canvas.height);
            state.captureRenderId = requestAnimationFrame(renderFrame);
        };
        renderFrame();
        recorderStream = state.captureCanvasStream;
    }

    state.captureRecorder = mimeType
        ? new MediaRecorder(recorderStream, { mimeType })
        : new MediaRecorder(recorderStream);

    state.captureRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size) {
            state.captureChunks.push(event.data);
        }
    };

    state.captureRecorder.onstop = () => {
        const chunks = state.captureChunks.slice();
        const discard = state.captureDiscardRecording;
        const type = chunks[0]?.type || mimeType || "video/webm";
        state.captureChunks = [];
        state.captureRecording = false;
        state.captureRecorder = null;
        if (state.captureRenderId) {
            cancelAnimationFrame(state.captureRenderId);
            state.captureRenderId = null;
        }
        if (state.captureCanvasStream) {
            state.captureCanvasStream.getTracks().forEach((track) => track.stop());
            state.captureCanvasStream = null;
        }
        state.captureCanvas = null;
        if (state.captureStream) {
            state.captureStream.getTracks().forEach((track) => track.stop());
            state.captureStream = null;
        }
        refs.captureLive && (refs.captureLive.srcObject = null);
        if (discard || !chunks.length) {
            updateCaptureControls();
            return;
        }
        const extension = type.includes("mp4") ? "mp4" : "webm";
        const file = new File(chunks, "video-" + Date.now() + "." + extension, { type });
        setCapturePreviewFile(file);
        if (refs.captureStatus) {
            refs.captureStatus.textContent = "Video ready to send.";
        }
    };

    state.captureRecorder.start(250);
    state.captureRecording = true;
    if (refs.captureStatus) {
        refs.captureStatus.textContent = "Recording video... tap again to stop.";
    }
    updateCaptureControls();
}

function stopVideoRecording() {
    if (!state.captureRecorder || state.captureRecorder.state === "inactive") {
        return;
    }
    state.captureRecorder.stop();
    state.captureRecording = false;
    if (refs.captureStatus) {
        refs.captureStatus.textContent = "Processing video...";
    }
    updateCaptureControls();
}

async function toggleVideoRecording() {
    if (state.captureRecording) {
        stopVideoRecording();
        return;
    }
    await startVideoRecording();
}

function setCaptureMode(mode) {
    if (mode !== "photo" && mode !== "video") {
        return;
    }
    state.captureMode = mode;
    updateCaptureControls();
    if (isCaptureSurfaceOpen()) {
        void startCaptureStream();
    }
}

function useCapturedMedia() {
    if (!state.captureFile) {
        showToast("Capture a photo or video first.", "error");
        return;
    }
    setPendingAttachment(state.captureFile);
    closeCaptureModal();
}

function updateComposerState() {
    const chat = state.chats.get(state.activeChatId);
    const canMessage = Boolean(chat && (isVirtualChat(chat) || state.socketConnected || state.pollingMode));
    const disabled = !canMessage;
    refs.messageInput.disabled = disabled;
    refs.fileInput.disabled = disabled;
    refs.cameraInput && (refs.cameraInput.disabled = disabled);
    refs.cameraButton && (refs.cameraButton.disabled = disabled);
    refs.emojiToggleButton && (refs.emojiToggleButton.disabled = disabled);
    refs.composerSubmitButton.disabled = disabled;

    if (!chat) {
        refs.messageInput.placeholder = "Choose a conversation to start messaging.";
        updateComposerSubmitButton();
        return;
    }
    if (isWaveBotChat(chat)) {
        refs.messageInput.placeholder = "Message WaveBot";
        updateComposerSubmitButton();
        return;
    }
    if (!state.socketConnected && !state.pollingMode) {
        refs.messageInput.placeholder = "Starting chat service...";
        updateComposerSubmitButton();
        return;
    }
    refs.messageInput.placeholder = state.pollingMode && !state.socketConnected
        ? "Type a message (sync mode)"
        : "Type a message";
    updateComposerSubmitButton();
}

async function sendTextMessage(text) {
    const chat = state.chats.get(state.activeChatId);
    if (isWaveBotChat(chat)) {
        await sendWaveBotTextMessage(text);
        return;
    }
    const clientMessageId = crypto.randomUUID();
    const payload = {
        chatId: chat.id,
        clientMessageId,
        text,
    };

    if (state.socket && state.socketConnected) {
        await applySentMessage({
            chatId: chat.id,
            clientMessageId,
            kind: "text",
            text,
            ciphertext: text,
            plain: {
                messageType: "text",
                text,
            },
            createdAt: new Date().toISOString(),
            fromSelf: true,
            senderId: state.me?.id || null,
            recipientId: chat.counterpart?.id || null,
            status: "sent",
            deliveredAt: null,
            readAt: null,
        });
        state.socket.emit("send_message", payload);
        return;
    }

    const data = await apiFetch("/api/messages/text", {
        method: "POST",
        body: payload,
    });
    await applySentMessage(data.message);
}

async function sendMediaMessage(file, caption) {
    const chat = state.chats.get(state.activeChatId);
    if (isWaveBotChat(chat)) {
        await sendWaveBotMediaMessage(file, caption);
        return;
    }
    const formData = new FormData();
    formData.append("chatId", String(chat.id));
    formData.append("clientMessageId", crypto.randomUUID());
    formData.append("caption", caption || "");
    formData.append("mimeType", file.type || "application/octet-stream");
    formData.append("fileName", file.name || "attachment");
    formData.append("file", file, file.name || "attachment");
    const data = await apiFetch("/api/messages/media", {
        method: "POST",
        body: formData,
    });
    await applySentMessage(data.message);
}

function emitTyping(isTyping) {
    const activeChat = state.chats.get(state.activeChatId);
    if (!state.socket || !state.socketConnected || !state.activeChatId || isVirtualChat(activeChat)) {
        return;
    }
    state.localTyping = isTyping;
    state.socket.emit("typing", {
        chatId: state.activeChatId,
        isTyping,
    });
}

function scheduleTyping() {
    const hasText = refs.messageInput.value.trim().length > 0;
    if (!hasText && state.localTyping) {
        emitTyping(false);
    }
    if (!hasText) {
        return;
    }
    if (!state.localTyping) {
        emitTyping(true);
    }
    window.clearTimeout(state.localTypingTimer);
    state.localTypingTimer = window.setTimeout(() => {
        emitTyping(false);
    }, 1200);
}

async function maybeNotify(message) {
    if (!("Notification" in window) || Notification.permission !== "granted") {
        return;
    }
    if (isChatMuted(message.chatId)) {
        return;
    }
    if (document.visibilityState === "visible" && state.activeChatId === message.chatId) {
        return;
    }
    const chat = state.chats.get(message.chatId);
    const title = getUserPrimaryText(chat?.counterpart, "New message");
    const body = message.plain?.messageType === "media"
        ? message.plain.caption || message.plain.fileName || "Sent an attachment"
        : message.plain?.text || "Sent you a message";
    new Notification(title, { body });
}
function connectSocket() {
    if (!window.io) {
        state.lastRealtimeError = "Socket.IO client failed to load.";
        state.socketConnected = false;
        updateSelfStatus();
        updateComposerState();
        updateConversationHeader(state.chats.get(state.activeChatId));
        startPollingFallback(state.lastRealtimeError);
        showToast(state.lastRealtimeError, "error");
        return;
    }

    if (state.socket) {
        state.socket.removeAllListeners?.();
        state.socket.disconnect();
        state.socket = null;
    }

    state.lastRealtimeError = "";
    state.connectionNoticeShown = false;
    state.socketConnected = false;

    const socketToken = refs.chatApp?.dataset.socketToken || "";

    try {
        state.socket = window.io("/", {
            path: "/socket.io",
            auth: {
                token: socketToken,
            },
            query: socketToken ? { token: socketToken } : {},
            transports: ["polling"],
            upgrade: false,
            timeout: 10000,
            reconnection: true,
            reconnectionAttempts: Infinity,
            reconnectionDelay: 1500,
            reconnectionDelayMax: 5000,
            forceNew: true,
            autoConnect: false,
        });
    } catch (error) {
        state.lastRealtimeError = error?.message || "Unable to start realtime chat.";
        updateSelfStatus();
        updateComposerState();
        updateConversationHeader(state.chats.get(state.activeChatId));
        startPollingFallback(state.lastRealtimeError);
        return;
    }

    state.socket.on("connect", () => {
        clearRealtimeWatchdog();
        stopPollingFallback();
        state.socketConnected = true;
        state.lastRealtimeError = "";
        state.connectionNoticeShown = false;
        updateComposerState();
        updateConversationHeader(state.chats.get(state.activeChatId));
        updateSelfStatus();
    });

    state.socket.on("socket:ready", () => {
        clearRealtimeWatchdog();
        stopPollingFallback();
        state.socketConnected = true;
        state.lastRealtimeError = "";
        state.connectionNoticeShown = false;
        updateComposerState();
        updateConversationHeader(state.chats.get(state.activeChatId));
        updateSelfStatus();
    });

    state.socket.on("disconnect", (reason) => {
        state.socketConnected = false;
        state.lastRealtimeError = reason === "io client disconnect"
            ? "Realtime chat was disconnected. Refresh to reconnect."
            : "Realtime connection lost. Using sync fallback.";
        updateSelfStatus();
        updateComposerState();
        updateConversationHeader(state.chats.get(state.activeChatId));
        startPollingFallback(state.lastRealtimeError);
        if (!state.connectionNoticeShown) {
            showToast(state.lastRealtimeError, "error");
            state.connectionNoticeShown = true;
        }
    });

    state.socket.on("connect_error", (error) => {
        state.socketConnected = false;
        state.lastRealtimeError = error?.message || error?.description || "Realtime connection failed. Using sync fallback.";
        updateSelfStatus();
        updateComposerState();
        updateConversationHeader(state.chats.get(state.activeChatId));
        startPollingFallback(state.lastRealtimeError);
        if (!state.connectionNoticeShown) {
            showToast(state.lastRealtimeError, "error");
            state.connectionNoticeShown = true;
        }
    });

    state.socket.on("message:error", (data) => {
        showToast(data.error || "Unable to send message.", "error");
    });

    state.socket.on("presence:update", (data) => {
        state.chats.forEach((chat) => {
            if (chat.counterpart?.id === data.userId) {
                chat.counterpart.isOnline = data.isOnline;
                chat.counterpart.lastSeenAt = data.lastSeenAt;
            }
        });
        updateConversationHeader(state.chats.get(state.activeChatId));
        renderChatList();
    });

    state.socket.on("typing", (data) => {
        if (data.userId === state.me.id) {
            return;
        }
        state.typingState.set(data.chatId, { isTyping: Boolean(data.isTyping) });
        if (data.isTyping) {
            window.setTimeout(() => {
                const current = state.typingState.get(data.chatId);
                if (current?.isTyping) {
                    state.typingState.set(data.chatId, { isTyping: false });
                    updateConversationHeader(state.chats.get(state.activeChatId));
                    renderChatList();
                }
            }, 1500);
        }
        updateConversationHeader(state.chats.get(state.activeChatId));
        renderChatList();
    });

    state.socket.on("message:status", (data) => {
        const chatMessages = getChatMessages(data.chatId);
        const message = chatMessages.find((item) => item.id === data.messageId);
        if (!message) {
            return;
        }
        message.deliveredAt = data.deliveredAt;
        if (data.status === "read") {
            message.readAt = data.readAt;
        }
        if (state.activeChatId === data.chatId) {
            void renderMessages();
        }
        renderChatList();
    });

    state.socket.on("messages:read", (data) => {
        const chatMessages = getChatMessages(data.chatId);
        chatMessages.forEach((message) => {
            if (data.messageIds.includes(message.id)) {
                message.readAt = data.readAt;
                message.deliveredAt = message.deliveredAt || data.readAt;
            }
        });
        if (state.activeChatId === data.chatId) {
            void renderMessages();
        }
        renderChatList();
    });

    state.socket.on("message:new", async (messageData) => {
        if (!state.chats.has(messageData.chatId)) {
            await refreshBootstrap();
        }
        const message = upsertMessage(messageData);
        await hydrateMessage(message);

        if (!message.fromSelf && state.socketConnected) {
            state.socket.emit("message_delivered", { messageId: message.id });
        }

        renderChatList();
        if (state.activeChatId === message.chatId) {
            const chat = state.chats.get(message.chatId);
            chat.unreadCount = 0;
            await renderMessages();
            scrollToBottom();
            await markActiveChatRead();
            updateConversationHeader(chat);
        } else if (!message.fromSelf) {
            await maybeNotify(message);
        }
    });

    state.socket.on("call:error", (data) => {
        const message = data.error || "Unable to place the call.";
        if (state.activeCall && (!data.chatId || state.activeCall.chatId === data.chatId) && state.activeCall.status !== "connected") {
            teardownActiveCall({ toastMessage: message, tone: "error" });
            return;
        }
        showToast(message, "error");
    });

    state.socket.on("call:incoming", (data) => {
        void handleIncomingCall(data);
    });

    state.socket.on("call:outgoing", (data) => {
        if (!state.activeCall || state.activeCall.callId !== data.callId) {
            return;
        }
        if (data.recipient) {
            state.activeCall.remoteName = data.recipient.displayName || data.recipient.phoneNumber || state.activeCall.remoteName;
            state.activeCall.remoteAvatarColor = data.recipient.avatarColor || state.activeCall.remoteAvatarColor;
        }
        if (state.activeCall.status === "dialing") {
            state.activeCall.status = "ringing";
        }
        updateConversationHeader(state.chats.get(state.activeChatId));
        updateCallUi();
    });

    state.socket.on("call:ringing", (data) => {
        if (!state.activeCall || state.activeCall.callId !== data.callId) {
            return;
        }
        state.activeCall.status = "ringing";
        updateConversationHeader(state.chats.get(state.activeChatId));
        updateCallUi();
    });

    state.socket.on("call:answered", (data) => {
        void handleCallAnswered(data);
    });

    state.socket.on("call:ice_candidate", (data) => {
        if (!state.activeCall || state.activeCall.callId !== data.callId) {
            return;
        }
        void handleIncomingIceCandidate(data.candidate);
    });

    state.socket.on("call:rejected", (data) => {
        if (!state.activeCall || state.activeCall.callId !== data.callId) {
            return;
        }
        teardownActiveCall({
            reason: data.reason || "declined",
            toastMessage: formatCallReason(data.reason),
            tone: data.reason === "busy" ? "error" : "info",
        });
    });

    state.socket.on("call:ended", (data) => {
        if (!state.activeCall || state.activeCall.callId !== data.callId) {
            return;
        }
        teardownActiveCall({
            reason: data.reason || "ended",
            toastMessage: formatCallReason(data.reason),
        });
    });

    state.socket.on("status:new", (statusItem) => {
        if (!statusItem?.id) {
            return;
        }
        mergeStatusItem(statusItem);
    });

    state.socket.on("chat:deleted", (data) => {
        if (!data?.chatId || !state.chats.has(data.chatId)) {
            return;
        }
        removeChatLocally(data.chatId, {
            toastMessage: data.message || "Chat deleted.",
        });
    });

    scheduleRealtimeWatchdog();
    console.info("[wavechat] starting realtime socket", { hasToken: Boolean(socketToken) });
    state.socket.connect();
}

async function startNewChat(phoneNumber) {
    const existingChat = findExistingChatByPhone(phoneNumber);
    if (existingChat) {
        state.phoneSearchResult = null;
        state.phoneSearchLoading = false;
        refs.chatSearch.value = "";
        renderChatList();
        await selectChat(existingChat.id);
        return;
    }

    const data = await apiFetch("/api/chats", {
        method: "POST",
        body: { phoneNumber },
    });
    await mergeChats([data.chat]);
    state.phoneSearchResult = null;
    state.phoneSearchLoading = false;
    refs.chatSearch.value = "";
    renderChatList();
    await selectChat(data.chat.id);
}

function closeModal() {
    refs.newChatStatus.textContent = "";
    refs.newChatStatus.classList.remove("error-text");
    refs.newChatModal.close();
}

function exitConversationToList() {
    if (state.activeCall) {
        showToast("End the current call before leaving this chat.", "error");
        return false;
    }
    state.activeChatId = null;
    syncResponsivePreview();
    refs.messages.innerHTML = "";
    refs.messageInput.value = "";
    refs.messageSearch.value = "";
    refs.emptyState.classList.remove("hidden");
    clearAttachmentPreview();
    refs.emojiBar.classList.add("hidden");
    setCallMenuOpen(false);
    setInfoDrawerOpen(false);
    setProfileMenuOpen(false);
    updateConversationHeader(null);
    updateComposerState();
    renderChatList();
    return true;
}

function getUnreadChatCount() {
    return Array.from(state.chats.values()).reduce((total, chat) => total + (chat.unreadCount || 0), 0);
}

function getFreshStoryCount() {
    return buildStoryItems().filter((story) => !story.isOwn && story.hasStatuses && story.fresh).length;
}

function getMissedCallCount() {
    return state.callHistory.filter((entry) => entry.outcome === "missed" || entry.outcome === "declined").length;
}

function setMobileNavBadge(key, count) {
    const badge = refs.mobileNav?.querySelector(`[data-badge="${key}"]`);
    if (!badge) {
        return;
    }
    const value = Number(count) || 0;
    if (value > 0) {
        badge.textContent = value > 99 ? "99+" : String(value);
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

function updateMobileNavBadges() {
    setMobileNavBadge("chats", getUnreadChatCount());
    setMobileNavBadge("stories", getFreshStoryCount());
    setMobileNavBadge("calls", getMissedCallCount());
}

function updateMobileNav() {
    if (!refs.mobileNavButtons || !refs.mobileNavButtons.length) {
        return;
    }
    refs.mobileNavButtons.forEach((button) => {
        const tab = button.dataset.mobileTab;
        const active = tab && tab !== "camera" && tab === state.sidebarView;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    updateMobileNavBadges();
}

async function initialize() {
    setTheme(localStorage.getItem("wavechat-theme") || "theme-dark");
    loadUiState();
    syncResponsivePreview();
    ensureStoryShell();
    await refreshBootstrap();
    renderSelfProfile();
    renderChatList();
    updateConversationHeader(null);
    updateComposerState();
    updateComposerSubmitButton();
    updateCallUi();
    showLoginSplashIfNeeded();
    startPollingFallback("Starting background sync while realtime connects.");
    connectSocket();

    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission().catch(() => undefined);
    }
}
refs.railChatsButton?.addEventListener("click", () => { setSidebarView("chats"); });
refs.railCallsButton?.addEventListener("click", () => { setSidebarView("calls"); });
refs.railStatusButton?.addEventListener("click", () => { setSidebarView("status"); });
refs.mobileNavButtons?.forEach((button) => {
    button.addEventListener("click", () => {
        const tab = button.dataset.mobileTab;
        if (!tab) {
            return;
        }
        if (tab === "camera") {
            launchCameraCapture(state.cameraCaptureMode || "photo");
            return;
        }
        if (isMobileViewport() && state.activeChatId) {
            const exited = exitConversationToList();
            if (!exited) {
                return;
            }
        }
        setSidebarView(tab);
    });
});
refs.chatSearch?.addEventListener("input", handleChatSearchInput);
refs.chatSearch?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
        return;
    }

    event.preventDefault();
    const query = refs.chatSearch.value.trim();
    if (!query) {
        return;
    }

    if (state.sidebarView === "calls") {
        const firstEntry = state.callHistory.find((entry) => {
            const searchable = [entry.name, entry.phoneNumber || "", formatCallHistoryMeta(entry), getCallOutcomeLabel(entry.outcome)].join(" ").toLowerCase();
            return searchable.includes(query.toLowerCase()) || phoneMatchesQuery(entry.phoneNumber || "", query);
        });
        if (firstEntry?.chatId) {
            void selectChat(firstEntry.chatId);
        }
        return;
    }

    if (state.sidebarView === "status") {
        const firstStory = buildStoryItems().find((story) => [story.title, story.meta || "", story.body || ""].join(" ").toLowerCase().includes(query.toLowerCase()));
        if (firstStory) {
            openStoryViewer(firstStory.id);
        }
        return;
    }

    const existingChat = findExistingChatByPhone(query);
    if (existingChat) {
        void selectChat(existingChat.id);
        return;
    }

    if (state.phoneSearchResult?.mode === "existing" && state.phoneSearchResult.chatId) {
        void selectChat(state.phoneSearchResult.chatId);
        return;
    }

    if (state.phoneSearchResult?.mode === "user" || looksLikePhoneQuery(query)) {
        void startNewChat(state.phoneSearchResult?.user?.phoneNumber || query).catch((error) => {
            showToast(error.message, "error");
        });
        return;
    }

    const firstChat = Array.from(state.chats.values())
        .filter((chat) => chatMatchesFilter(chat))
        .filter((chat) => chatMatchesSearch(chat, query))
        .sort((left, right) => getChatSortValue(right) - getChatSortValue(left))[0];
    if (firstChat) {
        void selectChat(firstChat.id);
    }
});
refs.chatList?.addEventListener("click", (event) => {
    const pinButton = event.target.closest("[data-pin-chat-id]");
    if (pinButton) {
        event.stopPropagation();
        togglePinnedChat(pinButton.dataset.pinChatId);
        return;
    }

    const callActionButton = event.target.closest("[data-call-contact-id]");
    if (callActionButton && !callActionButton.disabled) {
        event.stopPropagation();
        void startSidebarCall(callActionButton.dataset.callContactId, callActionButton.dataset.callType).catch((error) => {
            showToast(error.message, "error");
        });
        return;
    }

    const callQuickButton = event.target.closest("[data-call-action]");
    if (callQuickButton) {
        event.stopPropagation();
        openCallModal(callQuickButton.dataset.callAction);
        return;
    }

    const callChatButton = event.target.closest("[data-call-chat-id]");
    if (callChatButton) {
        void selectChat(Number(callChatButton.dataset.callChatId));
        return;
    }

    const createStatusButton = event.target.closest("[data-create-status]");
    if (createStatusButton) {
        const mode = createStatusButton.dataset.createStatus;
        if (mode === "media") {
            if (isMobileViewport()) {
                setStorySheetOpen(true);
            } else {
                openStatusMediaPicker();
            }
        } else {
            void submitTextStatus().catch((error) => {
                showToast(error.message, "error");
            });
        }
        return;
    }

    const storyButton = event.target.closest("[data-story-id]");
    if (storyButton) {
        openStoryViewer(storyButton.dataset.storyId);
        return;
    }

    const chatButton = event.target.closest("[data-chat-id]");
    if (chatButton) {
        void selectChat(Number(chatButton.dataset.chatId));
        return;
    }

    const phoneButton = event.target.closest("[data-phone-result]");
    if (phoneButton && !phoneButton.disabled) {
        void startNewChat(phoneButton.dataset.phoneResult).catch((error) => {
            showToast(error.message, "error");
        });
    }
});
refs.chatFilters?.addEventListener("click", (event) => {
    const target = event.target.closest("[data-filter]");
    if (!target) {
        return;
    }
    setChatFilter(target.dataset.filter || "all");
});
refs.messageSearch?.addEventListener("input", () => {
    void renderMessages();
});
refs.messages?.addEventListener("click", (event) => {
    if (event.target.closest(".message-action-btn")) {
        return;
    }
    const bubble = event.target.closest("[data-message-bubble]");
    if (!bubble) {
        return;
    }
    if (!window.matchMedia("(hover: none), (pointer: coarse)").matches) {
        return;
    }
    toggleMessageActionPeek(bubble.closest(".message-row"));
});
refs.messages?.addEventListener("keydown", (event) => {
    if ((event.key !== "Enter" && event.key !== " ") || !event.target.closest("[data-message-bubble]")) {
        return;
    }
    event.preventDefault();
    toggleMessageActionPeek(event.target.closest(".message-row"));
});
refs.messagesScroller?.addEventListener("scroll", () => {
    closeMessageActionPeek();
}, { passive: true });
refs.loadMoreButton?.addEventListener("click", () => {
    void loadOlderMessages();
});
refs.fileInput?.addEventListener("change", () => {
    setPendingAttachment(refs.fileInput.files?.[0]);
});
refs.cameraButton?.addEventListener("click", (event) => {
    if (event?.shiftKey) {
        launchCameraCapture("video");
        return;
    }
    if (isMobileViewport()) {
        launchCameraCapture("photo");
        return;
    }
    setCameraMenuOpen(!state.cameraMenuOpen);
});
refs.cameraInput?.addEventListener("change", () => {
    setPendingAttachment(refs.cameraInput.files?.[0]);
    setCameraMenuOpen(false);
});
refs.cameraMenuPhoto?.addEventListener("click", () => {
    launchCameraCapture("photo");
});
refs.cameraMenuVideo?.addEventListener("click", () => {
    launchCameraCapture("video");
});

refs.statusFileInput?.addEventListener("change", () => {
    const file = refs.statusFileInput.files?.[0];
    if (!file) {
        return;
    }
    void submitStatusMedia(file).catch((error) => {
        showToast(error.message, "error");
    });
});
refs.captureModal?.addEventListener("click", (event) => {
    const modeButton = event.target.closest("[data-capture-mode]");
    if (modeButton) {
        setCaptureMode(modeButton.dataset.captureMode || "photo");
        return;
    }
    const filterButton = event.target.closest("[data-capture-filter]");
    if (filterButton) {
        setCaptureFilter(filterButton.dataset.captureFilter || "normal");
    }
});
refs.captureCloseButton?.addEventListener("click", () => {
    closeCaptureModal();
});
refs.captureFallbackButton?.addEventListener("click", () => {
    showCaptureFallbackInput();
});
refs.capturePhotoButton?.addEventListener("click", () => {
    void capturePhotoFrame().catch((error) => {
        showToast(error.message, "error");
    });
});
refs.captureRecordButton?.addEventListener("click", () => {
    void toggleVideoRecording().catch((error) => {
        showToast(error.message, "error");
    });
});
refs.captureFlashButton?.addEventListener("click", () => {
    void toggleCaptureFlash();
});
refs.captureSwitchButton?.addEventListener("click", () => {
    void toggleCaptureFacing();
});
refs.captureUseButton?.addEventListener("click", () => {
    useCapturedMedia();
});
refs.captureModal?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeCaptureModal();
});
refs.emojiBar?.addEventListener("click", (event) => {
    const target = event.target.closest("[data-emoji]");
    if (!target) {
        return;
    }
    insertIntoComposer(target.dataset.emoji || "");
    refs.emojiBar.classList.add("hidden");
});
refs.emojiToggleButton?.addEventListener("click", () => {
    if (!state.activeChatId) {
        showToast("Choose a chat first.", "error");
        return;
    }
    refs.emojiBar.classList.toggle("hidden");
    setCallMenuOpen(false);
});
refs.muteChatButton?.addEventListener("click", () => {
    if (!state.activeChatId) {
        showToast("Choose a chat first.", "error");
        return;
    }
    toggleChatMuted(state.activeChatId);
});
refs.chatInfoButton?.addEventListener("click", () => {
    if (!state.activeChatId) {
        showToast("Choose a chat first.", "error");
        return;
    }
    setCallMenuOpen(false);
    refs.emojiBar.classList.add("hidden");
    if (isMobileViewport()) {
        const ownStory = allStories.find((story) => story.isOwn);
        const meLabel = createAvatarLabel(getUserPrimaryText(state.me || {}, "You"));
        const mySection = document.createElement("section");
        mySection.className = "status-my-story";
        mySection.innerHTML = `
            <div class="status-my-row" data-create-status="media" role="button" tabindex="0">
                <span class="story-avatar-wrap own">
                    <span class="avatar status-history-avatar status-my-avatar" style="background:${ownStory?.avatarColor || "#d9d9d9"}">${ownStory?.avatar || meLabel}</span>
                    <span class="status-plus">+</span>
                </span>
                <span class="status-my-copy">
                    <strong>My Story</strong>
                    <span>${ownStory?.hasStatuses ? (ownStory.meta || "Tap to view story") : "Tap to add story"}</span>
                </span>
            </div>
        `;
        refs.chatList.appendChild(mySection);

        const recentStories = stories.filter((story) => !story.isOwn && story.hasStatuses && story.fresh);
        const viewedStories = stories.filter((story) => !story.isOwn && story.hasStatuses && !story.fresh);

        const recentSection = document.createElement("section");
        recentSection.className = "status-section";
        recentSection.innerHTML = '<div class="status-section-title">Recent stories</div>';
        if (!recentStories.length) {
            const empty = document.createElement("div");
            empty.className = "sidebar-empty-state";
            empty.textContent = query ? "No recent stories match this search." : "No recent stories yet.";
            recentSection.appendChild(empty);
        } else {
            recentStories.forEach((story) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "status-history-item mobile-story-row";
                button.dataset.storyId = story.id;
                button.innerHTML = `
                    <span class="story-avatar-wrap fresh">
                        <span class="avatar status-history-avatar" style="background:${story.avatarColor}">${story.avatar}</span>
                    </span>
                    <span class="status-history-copy">
                        <strong>${story.title}</strong>
                        <span>${story.meta || "Just now"}</span>
                    </span>
                `;
                recentSection.appendChild(button);
            });
        }
        refs.chatList.appendChild(recentSection);

        const viewedSection = document.createElement("section");
        viewedSection.className = "status-section";
        viewedSection.innerHTML = '<div class="status-section-title">Viewed stories</div>';
        if (!viewedStories.length) {
            const empty = document.createElement("div");
            empty.className = "sidebar-empty-state";
            empty.textContent = query ? "No viewed stories match this search." : "No viewed stories yet.";
            viewedSection.appendChild(empty);
        } else {
            viewedStories.forEach((story) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "status-history-item mobile-story-row";
                button.dataset.storyId = story.id;
                button.innerHTML = `
                    <span class="story-avatar-wrap viewed">
                        <span class="avatar status-history-avatar" style="background:${story.avatarColor}">${story.avatar}</span>
                    </span>
                    <span class="status-history-copy">
                        <strong>${story.title}</strong>
                        <span>${story.meta || "Earlier"}</span>
                    </span>
                `;
                viewedSection.appendChild(button);
            });
        }
        refs.chatList.appendChild(viewedSection);
        return;
    }
    setInfoDrawerOpen(!state.infoDrawerOpen);
    updateInfoDrawer(state.chats.get(state.activeChatId));
});
refs.voiceCallButton?.addEventListener("click", () => {
    if (!state.activeChatId) {
        showToast("Choose a chat first.", "error");
        return;
    }
    refs.emojiBar.classList.add("hidden");
    setInfoDrawerOpen(false);
    setCallMenuOpen(false);
    void startOutgoingCall("voice").catch((error) => {
        showToast(error.message, "error");
    });
});
refs.videoCallButton?.addEventListener("click", () => {
    if (!state.activeChatId) {
        showToast("Choose a chat first.", "error");
        return;
    }
    refs.emojiBar.classList.add("hidden");
    setInfoDrawerOpen(false);
    setCallMenuOpen(false);
    void startOutgoingCall("video").catch((error) => {
        showToast(error.message, "error");
    });
});
refs.callMenu?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-call-type]");
    if (!button || button.disabled) {
        return;
    }
    setCallMenuOpen(false);
    void startOutgoingCall(button.dataset.callType).catch((error) => {
        showToast(error.message, "error");
    });
});
refs.acceptCallButton?.addEventListener("click", () => {
    void acceptIncomingCall();
});
refs.rejectCallButton?.addEventListener("click", () => {
    rejectIncomingCall("declined", "Call declined.");
});
refs.endCallButton?.addEventListener("click", () => {
    teardownActiveCall({
        notifyPeer: true,
        reason: "ended",
        toastMessage: "Call ended.",
    });
});
refs.toggleMicButton?.addEventListener("click", () => {
    toggleMicrophone();
});
refs.toggleCameraButton?.addEventListener("click", () => {
    toggleCamera();
});
refs.closeInfoButton?.addEventListener("click", () => {
    setInfoDrawerOpen(false);
});
refs.infoTogglePinButton?.addEventListener("click", () => {
    if (state.activeChatId) {
        togglePinnedChat(state.activeChatId);
    }
});
refs.infoToggleMuteButton?.addEventListener("click", () => {
    if (state.activeChatId) {
        toggleChatMuted(state.activeChatId);
    }
});
refs.chatMenuItems?.forEach((button) => {
    button.addEventListener("click", () => {
        if (!state.activeChatId) {
            showToast("Choose a chat first.", "error");
            return;
        }
        const action = button.dataset.chatMenuAction;
        setChatMenuOpen(false);
        switch (action) {
            case "view-contact":
                setInfoDrawerOpen(true);
                updateInfoDrawer(state.chats.get(state.activeChatId));
                break;
            case "media":
                setInfoDrawerOpen(true);
                updateInfoDrawer(state.chats.get(state.activeChatId));
                break;
            case "search":
                refs.messageSearch?.focus();
                break;
            case "mute":
                toggleChatMuted(state.activeChatId);
                break;
            case "disappearing":
                showToast("Disappearing messages are not enabled yet.");
                break;
            case "wallpaper":
                showToast("Wallpaper customization is coming soon.");
                break;
            case "clear":
                void deleteChat(state.activeChatId).catch((error) => {
                    showToast(error.message, "error");
                });
                break;
            case "export":
                exportActiveChat();
                break;
            case "shortcut":
                showToast("Shortcut added to your home screen.");
                break;
            case "block":
                showToast("Blocking is not wired yet.");
                break;
            default:
                break;
        }
    });
});
refs.infoDeleteChatButton?.addEventListener("click", () => {
    if (!state.activeChatId) {
        showToast("Choose a chat first.", "error");
        return;
    }
    void deleteChat(state.activeChatId).catch((error) => {
        showToast(error.message, "error");
    });
});
refs.composer?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!state.activeChatId) {
        showToast("Choose a chat first.", "error");
        return;
    }

    const text = refs.messageInput.value.trim();
    if (!text && !state.pendingFile) {
        return;
    }

    try {
        if (state.pendingFile) {
            await sendMediaMessage(state.pendingFile, text);
        } else {
            await sendTextMessage(text);
        }
        refs.messageInput.value = "";
        setDraftText(state.activeChatId, "");
        emitTyping(false);
        clearAttachmentPreview();
        refs.emojiBar.classList.add("hidden");
        updateComposerSubmitButton();
        updateInfoDrawer(state.chats.get(state.activeChatId));
    } catch (error) {
        showToast(error.message, "error");
    }
});
refs.messageInput?.addEventListener("input", () => {
    scheduleTyping();
    setDraftText(state.activeChatId, refs.messageInput.value);
    updateComposerSubmitButton();
});
refs.newChatButton?.addEventListener("click", () => {
    if (state.activeCall) {
        showToast("Finish the current call before starting a new chat.", "error");
        return;
    }
    setProfileMenuOpen(false);
    refs.chatSearch.focus();
    refs.chatSearch.select?.();
    showToast("Search a phone number in the sidebar to start a chat.");
});
refs.closeModalButton?.addEventListener("click", closeModal);
refs.newChatForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    refs.newChatStatus.classList.remove("error-text");
    refs.newChatStatus.textContent = "Finding contact...";
    try {
        await startNewChat(refs.newChatPhone.value.trim());
        refs.newChatPhone.value = "";
        closeModal();
    } catch (error) {
        refs.newChatStatus.textContent = error.message;
        refs.newChatStatus.classList.add("error-text");
    }
});
refs.logoutButton?.addEventListener("click", async () => {
    try {
        sessionStorage.removeItem("wavechat-show-splash");
        await apiFetch("/auth/logout", { method: "POST" });
        window.location.href = "/";
    } catch (error) {
        showToast(error.message, "error");
    }
});
refs.profileMenuButton?.addEventListener("click", () => {
    setProfileMenuOpen(!state.profileMenuOpen);
});
const handleThemeToggle = () => {
    const nextTheme = document.body.classList.contains("theme-dark") ? "theme-light" : "theme-dark";
    setTheme(nextTheme);
};
refs.themeToggle?.addEventListener("click", handleThemeToggle);
refs.mobileThemeToggle?.addEventListener("click", handleThemeToggle);
refs.mobileBackButton?.addEventListener("click", () => {
    exitConversationToList();
});
refs.callModalRoot?.addEventListener("input", (event) => {
    const target = event.target;
    if (target && target.matches("[data-call-modal-search]")) {
        filterCallModalContacts(target.value);
    }
});
refs.callModalRoot?.addEventListener("click", (event) => {
    const closeButton = event.target.closest("[data-call-modal-close]");
    if (closeButton) {
        closeCallModal();
        return;
    }
    const backButton = event.target.closest("[data-call-modal-back]");
    if (backButton) {
        openCallModal(backButton.dataset.callModalBack || "favorites");
        return;
    }
    const toastButton = event.target.closest("[data-call-modal-toast]");
    if (toastButton) {
        showToast(toastButton.dataset.callModalToast || "Done");
        return;
    }
    const quickCall = event.target.closest("[data-call-contact-id]");
    if (quickCall) {
        event.stopPropagation();
        void startSidebarCall(quickCall.dataset.callContactId, quickCall.dataset.callType).catch((error) => {
            showToast(error.message, "error");
        });
        closeCallModal();
        return;
    }
    const favoriteAdd = event.target.closest("[data-favorite-add]");
    if (favoriteAdd) {
        openCallModal("favorites", "add");
        return;
    }
    const favoriteRemove = event.target.closest("[data-favorite-remove]");
    if (favoriteRemove) {
        toggleFavoriteContact(favoriteRemove.dataset.favoriteRemove);
        openCallModal("favorites");
        return;
    }
    const favoriteAddContact = event.target.closest("[data-favorite-add-contact]");
    if (favoriteAddContact) {
        toggleFavoriteContact(favoriteAddContact.dataset.favoriteAddContact);
        openCallModal("favorites", "add");
        return;
    }
    const keypadDigit = event.target.closest("[data-keypad-digit]");
    if (keypadDigit) {
        state.keypadValue += keypadDigit.dataset.keypadDigit || "";
        updateKeypadDisplay();
        return;
    }
    const keypadDelete = event.target.closest("[data-keypad-delete]");
    if (keypadDelete) {
        state.keypadValue = state.keypadValue.slice(0, -1);
        updateKeypadDisplay();
        return;
    }
    const keypadCall = event.target.closest("[data-keypad-call]");
    if (keypadCall) {
        const matchId = refs.callModalRoot?.querySelector("#keypad-match")?.dataset.chatId;
        if (matchId) {
            void startSidebarCall(matchId, "voice").catch((error) => {
                showToast(error.message, "error");
            });
            closeCallModal();
            return;
        }
        if (state.keypadValue) {
            showToast(`Calling ${state.keypadValue}...`);
        }
        return;
    }
    const keypadChat = event.target.closest("[data-keypad-chat]");
    if (keypadChat) {
        const matchId = refs.callModalRoot?.querySelector("#keypad-match")?.dataset.chatId;
        if (matchId) {
            void selectChat(Number(matchId));
            closeCallModal();
        } else {
            showToast("Choose a saved contact to open chat.", "error");
        }
        return;
    }
    const scheduleSubmit = event.target.closest("[data-schedule-submit]");
    if (scheduleSubmit) {
        const root = refs.callModalRoot;
        const title = root?.querySelector("[data-schedule-title]")?.value || "Scheduled call";
        showToast(`Scheduled: ${title}`);
        closeCallModal();
    }
});
document.addEventListener("click", (event) => {
    if (state.callMenuOpen && !event.target.closest(".call-menu-wrap")) {
        setCallMenuOpen(false);
    }
    if (state.profileMenuOpen && !event.target.closest("#profile-menu-btn") && !event.target.closest("#profile-panel")) {
        setProfileMenuOpen(false);
    }
    if (state.cameraMenuOpen && !event.target.closest("#camera-menu") && !event.target.closest("#camera-btn")) {
        setCameraMenuOpen(false);
    }
    if (state.chatMenuOpen && !event.target.closest("#chat-menu") && !event.target.closest("#chat-info-btn")) {
        setChatMenuOpen(false);
    }
    if (!refs.emojiBar.classList.contains("hidden") && !event.target.closest("#emoji-bar") && !event.target.closest("#emoji-toggle-btn")) {
        refs.emojiBar.classList.add("hidden");
    }
    if (!event.target.closest(".message-row")) {
        closeMessageActionPeek();
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (!refs.storyViewer?.classList.contains("hidden")) {
            closeStoryViewer();
        }
        if (state.callMenuOpen) {
            setCallMenuOpen(false);
        }
        if (state.infoDrawerOpen) {
            setInfoDrawerOpen(false);
        }
        if (state.profileMenuOpen) {
            setProfileMenuOpen(false);
        }
        if (state.cameraMenuOpen) {
            setCameraMenuOpen(false);
        }
        if (refs.callModalRoot && !refs.callModalRoot.classList.contains("hidden")) {
            closeCallModal();
        }
        refs.emojiBar.classList.add("hidden");
    }
});
if (typeof mobileViewportQuery.addEventListener === "function") {
    mobileViewportQuery.addEventListener("change", syncResponsivePreview);
} else if (typeof mobileViewportQuery.addListener === "function") {
    mobileViewportQuery.addListener(syncResponsivePreview);
}
window.addEventListener("resize", syncResponsivePreview);
window.addEventListener("orientationchange", syncResponsivePreview);

document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        void markActiveChatRead();
    }
});
window.addEventListener("beforeunload", () => {
    state.mediaCache.forEach((value) => {
        URL.revokeObjectURL(value.url);
    });
});

initialize().catch((error) => {
    console.error(error);
    showToast(error.message || "Unable to start the app.", "error");
});

















































































































