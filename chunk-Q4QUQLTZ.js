import{a as o}from"./chunk-URCWDJCZ.js";import{e as a}from"./chunk-LJIM2356.js";a();var l=class{async send(i){return console.warn("[NoOpEmailService] Email sending is not configured"),{success:!1,error:"Email service not configured"}}};a();var d=class{constructor(){this.handlers=new Map}registerHandler(i,e){this.handlers.set(i,e)}async addJob(i,e,t){let u=this.handlers.get(i);if(!u)return console.warn(`[SyncJobQueue] No handler registered for job: ${i}`),{success:!1,jobId:`sync-${Date.now()}`,error:`No handler for job: ${i}`};try{let c=await u(e);return{success:!0,jobId:`sync-${Date.now()}`,data:c}}catch(c){return{success:!1,jobId:`sync-${Date.now()}`,error:c.message}}}async addBulk(i){return Promise.all(i.map(e=>this.addJob(e.name,e.data,e.options)))}};a();var p=class{constructor(){this.services={},this.initialized=!1}register(i,e){this.services[i]=e}get(i){let e=this.services[i];if(e)return e;switch(i){case"email":return new l;case"jobQueue":return new d;default:throw new Error(`Unknown service: ${i}`)}}has(i){return i in this.services}initialize(){this.initialized||(this.has("email")||this.register("email",new l),this.has("jobQueue")||this.register("jobQueue",new d),this.initialized=!0)}reset(){this.services={},this.initialized=!1}},f=new p;function _(){return f.get("email")}function b(){return f.get("jobQueue")}a();var m=o.object({siteTitle:o.string().default("Welcome"),features:o.object({allowRegistration:o.boolean().default(!0),emailPasswordAuth:o.boolean().default(!0),googleAuth:o.boolean().default(!1),githubAuth:o.boolean().default(!1),requireEmailVerification:o.boolean().default(!0),emailVerification:o.boolean().default(!0),autoCreateAccount:o.boolean().default(!0),twoFactorAuth:o.boolean().default(!1),publicProfiles:o.boolean().default(!0),magicLink:o.boolean().default(!1)}).default({}),display:o.object({showLogo:o.boolean().default(!0),theme:o.enum(["light","dark","auto"]).default("auto"),layout:o.enum(["centered","split"]).default("centered")}).default({}),redirects:o.object({afterLogin:o.string().default("/"),afterLogout:o.string().default("/"),afterSignup:o.string().default("/")}).default({}),security:o.object({sessionDuration:o.number().default(30),maxLoginAttempts:o.number().default(5),lockoutDuration:o.number().default(15)}).default({})});a();var g=[{id:"auth-login",path:"/login",pageId:"login",title:"Login",description:"Sign in to your account",meta:{noIndex:!0}},{id:"auth-signup",path:"/signup",pageId:"signup",title:"Sign Up",description:"Create a new account",meta:{noIndex:!0}},{id:"auth-forgot-password",path:"/forgot-password",pageId:"forgot-password",title:"Forgot Password",description:"Reset your password",meta:{noIndex:!0}},{id:"auth-reset-password",path:"/reset-password/:token",pageId:"reset-password",title:"Reset Password",description:"Set a new password",meta:{noIndex:!0}},{id:"auth-verify-email",path:"/verify-email/:token",pageId:"verify-email",title:"Verify Email",description:"Verify your email address",meta:{noIndex:!0}},{id:"auth-logout",path:"/logout",pageId:"logout",title:"Logout",description:"Sign out of your account",meta:{noIndex:!0}},{id:"user-profile",path:"/users/:userId",pageId:"profile",title:"User Profile",description:"View user profile"},{id:"user-settings",path:"/settings",pageId:"settings",title:"Account Settings",description:"Manage your account settings",meta:{requireAuth:!0,noIndex:!0}},{id:"user-settings-profile",path:"/settings/profile",pageId:"settings-profile",title:"Profile Settings",description:"Edit your profile information",meta:{requireAuth:!0,noIndex:!0}},{id:"user-settings-security",path:"/settings/security",pageId:"settings-security",title:"Security Settings",description:"Manage your security settings",meta:{requireAuth:!0,noIndex:!0}},{id:"admin-users",path:"/admin/users",pageId:"admin-users",title:"User Management",description:"Manage users, permissions and access",meta:{requireAuth:!0,requirePermission:"users:manage",noIndex:!0}},{id:"admin-user-detail",path:"/admin/users/:userId",pageId:"admin-user-detail",title:"User Details",description:"View and edit user details",meta:{requireAuth:!0,requirePermission:"users:manage",noIndex:!0}},{id:"admin-roles",path:"/admin/roles",pageId:"admin-roles",title:"Role Management",description:"Manage roles and permissions",meta:{requireAuth:!0,requirePermission:"roles:manage",noIndex:!0}},{id:"admin-invites",path:"/admin/invites",pageId:"admin-invites",title:"Invitations",description:"Manage user invitations",meta:{requireAuth:!0,requirePermission:"users:manage",noIndex:!0}}];a();var n=[{id:"header",name:"Header",description:"Above the page header",position:"header"},{id:"footer",name:"Footer",description:"Before page footer",position:"footer"}],h={login:[...n,{id:"login_header",name:"Login Header",description:"Content displayed above the login form",position:"before_content"},{id:"login_footer",name:"Login Footer",description:"Content displayed below the login form",position:"after_content"}],signup:[...n,{id:"signup_header",name:"Signup Header",description:"Content displayed above the signup form",position:"before_content"},{id:"signup_footer",name:"Signup Footer",description:"Content displayed below the signup form",position:"after_content"}],profile:[...n,{id:"profile_header",name:"Profile Header",description:"Content displayed in the profile header area",position:"before_content"},{id:"profile_content",name:"Profile Content",description:"Additional content in the profile page",position:"after_content"},{id:"profile_sidebar",name:"Profile Sidebar",description:"Sidebar content on the profile page",position:"sidebar"}],settings:[...n,{id:"settings_extra",name:"Settings Extra",description:"Additional settings sections",position:"after_content"}],"forgot-password":[...n,{id:"forgot_header",name:"Forgot Header",description:"Content above forgot password form",position:"before_content"}],"reset-password":[...n],"verify-email":[...n]};a();var y=[{id:"users",name:"Users",description:"Liste des utilisateurs",providerType:"auth_user",table:"data_auth_user",defaultConfig:{orderBy:"created_at:desc",excludeSensitive:!0},filters:[{field:"enabled_state",type:"boolean",label:"Enabled only"},{field:"provider",type:"enum",label:"Provider",options:["cookie_inner","google","magic_link"]}],fields:["id","provider_id","email","enabled_state","provider","values","connected_at","created_at","updated_at"]},{id:"accounts",name:"Accounts",description:"Comptes/workspaces",providerType:"auth_account",table:"data_auth_account",defaultConfig:{orderBy:"created_at:desc"},filters:[{field:"enabled",type:"boolean",label:"Enabled only"}],fields:["id","informations","enabled","created_at","updated_at"]},{id:"account_users",name:"Account Members",description:"Membres des comptes avec leurs r\xF4les",providerType:"auth_account_users",table:"data_auth_account_users",defaultConfig:{includeUser:!0,includeRole:!0,orderBy:"created_at:asc"},filters:[{field:"account_id",type:"relation",label:"Account",relation:"accounts"},{field:"user_id",type:"relation",label:"User",relation:"users"},{field:"role_id",type:"relation",label:"Role",relation:"roles"}],fields:["account_id","user_id","role_id","created_at"]},{id:"roles",name:"Roles",description:"R\xF4les RBAC",providerType:"auth_role",table:"data_auth_role",defaultConfig:{orderBy:"name:asc",includeFeatures:!0},filters:[{field:"is_system",type:"boolean",label:"System roles"}],fields:["id","name","description","is_system","created_at"]},{id:"features",name:"Features",description:"Permissions granulaires",providerType:"auth_feature",table:"data_auth_feature",defaultConfig:{orderBy:"name:asc"},filters:[{field:"category",type:"string",label:"Category"}],fields:["id","name","description","category","created_at"]},{id:"sessions",name:"User Sessions",description:"Sessions actives (admin)",providerType:"auth_user_session",table:"data_auth_user_session",defaultConfig:{orderBy:"created_at:desc",limit:50},filters:[{field:"user_id",type:"relation",label:"User",relation:"users"}],fields:["session_token","user_id","expires_at","created_at","context"]},{id:"audit_logs",name:"Audit Logs",description:"Logs de s\xE9curit\xE9 (admin)",providerType:"auth_audit_log",table:"data_auth_audit_log",defaultConfig:{orderBy:"created_at:desc",limit:100},filters:[{field:"event_type",type:"enum",label:"Event Type",options:["login_success","login_failure","logout","register","password_reset_request","password_reset_success","password_change","2fa_success","2fa_failure","account_locked","suspicious_activity"]},{field:"user_id",type:"relation",label:"User",relation:"users"},{field:"status",type:"enum",label:"Status",options:["success","failure","blocked"]}],fields:["id","event_type","status","user_id","attempted_email","ip_address","user_agent","risk_score","created_at"]},{id:"invites",name:"Invitations",description:"Invitations en attente",providerType:"auth_account_invite",table:"data_auth_account_invite",defaultConfig:{orderBy:"created_at:desc"},filters:[{field:"account_id",type:"relation",label:"Account",relation:"accounts"},{field:"is_used",type:"boolean",label:"Used"}],fields:["id","email","role_id","account_id","is_used","expires_at","created_at"]}];a();var w={id:"user-auth",name:"User Authentication",description:"User authentication and profile management system",version:"1.0.0",category:"utility",dependencies:[],defaultConfig:{routePrefix:"/auth",settings:{siteTitle:"Welcome",features:{allowRegistration:!0,emailPasswordAuth:!0,emailVerification:!1,magicLink:!1,googleAuth:!1,githubAuth:!1,twoFactorAuth:!1,publicProfiles:!0,autoCreateAccount:!0},display:{showLogo:!0,theme:"auto",layout:"centered"},redirects:{afterLogin:"/",afterLogout:"/",afterSignup:"/"},security:{sessionDuration:30,maxLoginAttempts:5,lockoutDuration:15}},features:{}},configSchema:m,routes:g,slots:h,dataSources:y,apiHandlers:void 0,tables:["data_auth_user","data_auth_user_session","data_auth_account","data_auth_account_users","data_auth_account_invite","data_auth_role","data_auth_role_feature","data_auth_feature","data_auth_user_feature","data_auth_audit_log"]};a();function v(r){let{to:i,resetUrl:e,userName:t}=r;return{to:i,subject:"Reset your password",html:`
      <p>Hello${t?` ${t}`:""},</p>
      <p>We received a request to reset your password. Click the button below to choose a new password.</p>
      <p><a href="${e}" style="display: inline-block; padding: 12px 24px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 6px;">Reset Password</a></p>
      <p>If you didn't request this, you can safely ignore this email.</p>
      <p>This link will expire in 1 hour.</p>
    `,text:`Hello${t?` ${t}`:""},

We received a request to reset your password. Click the link below to choose a new password:

${e}

If you didn't request this, you can safely ignore this email.

This link will expire in 1 hour.`}}function x(r){let{to:i,verifyUrl:e,userName:t}=r;return{to:i,subject:"Verify your email address",html:`
      <p>Hello${t?` ${t}`:""},</p>
      <p>Please verify your email address by clicking the button below.</p>
      <p><a href="${e}" style="display: inline-block; padding: 12px 24px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 6px;">Verify Email</a></p>
      <p>If you didn't create an account, you can safely ignore this email.</p>
    `,text:`Hello${t?` ${t}`:""},

Please verify your email address by clicking the link below:

${e}

If you didn't create an account, you can safely ignore this email.`}}function k(r){let{to:i,inviteUrl:e,inviterName:t,accountName:u}=r;return{to:i,subject:`You've been invited to join ${u}`,html:`
      <p>Hello,</p>
      <p>${t} has invited you to join <strong>${u}</strong>.</p>
      <p>Click the button below to accept the invitation and create your account.</p>
      <p><a href="${e}" style="display: inline-block; padding: 12px 24px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 6px;">Accept Invitation</a></p>
      <p>This invitation will expire in 7 days.</p>
    `,text:`Hello,

${t} has invited you to join ${u}.

Click the link below to accept the invitation and create your account:

${e}

This invitation will expire in 7 days.`}}function I(r){let{to:i,magicLinkUrl:e,userName:t}=r;return{to:i,subject:"Sign in to your account",html:`
      <p>Hello${t?` ${t}`:""},</p>
      <p>Click the button below to sign in to your account.</p>
      <p><a href="${e}" style="display: inline-block; padding: 12px 24px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 6px;">Sign In</a></p>
      <p>This link will expire in 15 minutes.</p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    `,text:`Hello${t?` ${t}`:""},

Click the link below to sign in to your account:

${e}

This link will expire in 15 minutes.

If you didn't request this, you can safely ignore this email.`}}function $(r){let{to:i,loginUrl:e,userName:t}=r;return{to:i,subject:"Welcome! Your account has been created",html:`
      <p>Hello${t?` ${t}`:""},</p>
      <p>Welcome! Your account has been successfully created.</p>
      <p>You can now sign in to access your account.</p>
      <p><a href="${e}" style="display: inline-block; padding: 12px 24px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 6px;">Sign In</a></p>
    `,text:`Hello${t?` ${t}`:""},

Welcome! Your account has been successfully created.

You can now sign in to access your account:

${e}`}}function A(r){let{to:i,userName:e,supportUrl:t}=r;return{to:i,subject:"Your password has been changed",html:`
      <p>Hello${e?` ${e}`:""},</p>
      <p>Your password has been successfully changed.</p>
      <p>If you didn't make this change, please contact support immediately${t?` at <a href="${t}">${t}</a>`:""}.</p>
    `,text:`Hello${e?` ${e}`:""},

Your password has been successfully changed.

If you didn't make this change, please contact support immediately${t?` at ${t}`:""}.`}}var S={passwordReset:v,verification:x,invitation:k,magicLink:I,welcome:$,passwordChanged:A};a();export{l as a,d as b,f as c,_ as d,b as e,m as f,g,h,y as i,w as j,S as k};
