import React, { lazy, useEffect, Suspense } from "react";
import config from "config";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// Navigate
const LoginContainer = lazy(() => import("./client/components/login/login.jsx"));
const Register = lazy(() => import("./client/components/register/register.jsx"));
const ForgotPassword = lazy(() => import("./client/components/forgot-password"));
const BlogList = lazy(() => import("./client/components/blog/bloglist"));
const BlogGrid = lazy(() => import("./client/components/blog/bloggrid"));
const BlogDetails = lazy(() => import("./client/components/blog/blogdetails"));
const VideoCall = lazy(() => import("./client/components/pages/videocall"));
const VoiceCall = lazy(() => import('./client/components/pages/voicecall'));
const SearchDoctor = lazy(() => import("./client/components/pages/searchdoctor/search-doctor1"));
const Components = lazy(() => import("./client/components/pages/component"));
const Calendar = lazy(() => import("./client/components/pages/calender"));
const Invoice = lazy(() => import("./client/components/pages/invoices/invoices"));
const InvoiceView = lazy(() => import("./client/components/pages/invoices/view"));
const DoctorGrid = lazy(() => import("./client/components/patients/doctorgrid"));
const DoctorList = lazy(() => import("./client/components/patients/doctorlist"));
const DoctorProfile = lazy(() => import("./client/components/patients/doctorprofile"));
const DoctorChat = lazy(() => import("./client/components/doctors/chat"));
const PatientChat = lazy(() => import("./client/components/patients/chat"));
const MyPatient = lazy(() => import("./client/components/doctors/mypatient"));
const Booking = lazy(() => import("./client/components/patients/booking/booking1"));
const Booking2 = lazy(() => import(('./client/components/patients/booking/booking2')));
const Checkout = lazy(() => import("./client/components/patients/checkout"));
const BookingSuccess = lazy(() => import("./client/components/patients/booking-success"));
const Dashboard = lazy(() => import("./client/components/patients/dashboard"));
const PatientDependent = lazy(() => import("./client/components/patients/dependent"));
const PatientAccounts = lazy(() => import("./client/components/patients/accounts"));
const Orders = lazy(() => import("./client/components/patients/orders"));
const MedicalRecords = lazy(() => import("./client/components/patients/medicalrecords"));
const MedicalDetails = lazy(() => import("./client/components/patients/medicaldetails"));
const Favourties = lazy(() => import("./client/components/patients/dashboard/favourties"));
const Profile = lazy(() => import("./client/components/patients/dashboard/profile"));
const Password = lazy(() => import("./client/components/patients/dashboard/password"));
const DoctorDashboard = lazy(() => import("./client/components/doctors/dashboard"));
const SocialMedia = lazy(() => import("./client/components/doctors/socialmedia"));
const ScheduleTiming = lazy(() => import("./client/components/doctors/scheduletimings"));
const DoctorPassword = lazy(() => import("./client/components/doctors/password"));
const Appointments = lazy(() => import("./client/components/doctors/appointments"));
const PatientProfile = lazy(() => import("./client/components/doctors/patientprofile"));
const AddPescription = lazy(() => import("./client/components/doctors/addpescription"));
const AddBilling = lazy(() => import("./client/components/doctors/addbilling"));
const ProfileSetting = lazy(() => import("./client/components/doctors/profilesetting"));
const Review = lazy(() => import("./client/components/doctors/reviews"));
const DoctorRegister = lazy(() => import("./client/components/doctors/register"));
const Registerstepone = lazy(() => import("./client/components/doctors/register/registerstepone"));
const Registersteptwo = lazy(() => import("./client/components/doctors/register/registersteptwo"));
const Registerstepthree = lazy(() => import("./client/components/doctors/register/registerstepthree"));
const Terms = lazy(() => import("./client/components/pages/terms"));
const Policy = lazy(() => import("./client/components/pages/policy"));
const Aboutus = lazy(() => import("./client/components/pages/aboutus/aboutus"));
const Contactus = lazy(() => import("./client/components/pages/contactus/contactus"));
const Patientregisterstepone = lazy(() => import("./client/components/register/patientregisterstepone"));
const Patientregistersteptwo = lazy(() => import("./client/components/register/patientregistersteptwo"));
const Patientregisterstepthree = lazy(() => import("./client/components/register/patientregisterstepthree"));
const Patientregisterstepfour = lazy(() => import("./client/components/register/patientregisterstepfour"));
const Patientregisterstepfive = lazy(() => import("./client/components/register/patientregisterstepfive"));
const Pharmacy = lazy(() => import("./client/components/Pharmacy/pharmacy"));
const PharmacyDetail = lazy(() => import("./client/components/Pharmacy/pharmactdetail"));
const PharmacySearch = lazy(() => import("./client/components/Pharmacy/pharmacysearch"));
const Cart = lazy(() => import("./client/components/Pharmacy/cart"));
const Product = lazy(() => import("./client/components/Pharmacy/product"));
const ProductDescription = lazy(() => import("./client/components/Pharmacy/productdescription"));
const ProductCheckout = lazy(() => import("./client/components/Pharmacy/productcheckout"));
const PayoutSuccess = lazy(() => import("./client/components/Pharmacy/payoutsuccess"));

const BlankPage = lazy(() => import("./client/components/pages/starter page/index"));
const Pharmacyregister = lazy(() => import("./client/components/Pharmacy/pharmacyregister"));
const Pharmacyregisterstepone = lazy(() => import("./client/components/Pharmacy/pharmacyregisterstepone"));
const Pharmacyregistersteptwo = lazy(() => import("./client/components/Pharmacy/pharmacyregistersteptwo"));
const Pharmacyregisterstepthree = lazy(() => import("./client/components/Pharmacy/pharmacyregisterstepthree"));
const Doctorblog = lazy(() => import("./client/components/blog/doctorblog/doctorblog"));
const Doctoraddblog = lazy(() => import("./client/components/blog/doctorblog/doctoraddblog"));
const Doctorpendingblog = lazy(() => import("./client/components/blog/doctorblog/doctorpendingblog"));
const Doctoreditblog = lazy(() => import("./client/components/blog/doctorblog/doctoreditblog"));
const EditPrescription = lazy(() => import("./client/components/doctors/patientprofile/edit-prescription"));
const EditBilling = lazy(() => import("./client/components/doctors/editbilling/index"));
const MapList = lazy(() => import("./client/components/patients/map-list/index"));
const OnboardingEmail = lazy(() => import("./client/components/pages/doctoronboarding/onboardingemail"));
const OnboardingPersonalize = lazy(() => import("./client/components/pages/doctoronboarding/onboardingpersonalize"));
const OnboardingIdentity = lazy(() => import("./client/components/pages/doctoronboarding/onboardingidentity"));
const OnboardingPayments = lazy(() => import("./client/components/pages/doctoronboarding/onboardingpayments"));
const OnboardingPreferences = lazy(() => import("./client/components/pages/doctoronboarding/onboardingpreferences"));
const Onboardingverification = lazy(() => import("./client/components/pages/doctoronboarding/onboardingverification"));
const PatientOnboardingEmail = lazy(() => import("./client/components/pages/patientonboarding/Email"));
const PatientOnboardingPersonalize = lazy(() => import("./client/components/pages/patientonboarding/Personalize"));
const PatientOnboardingDetails = lazy(() => import("./client/components/pages/patientonboarding/Details"));
const PatientFamilyDetails = lazy(() => import("./client/components/pages/patientonboarding/FamilyDetails"));
const DependantDetails = lazy(() => import("./client/components/pages/patientonboarding/DependantDetails"));
const OtherDetails = lazy(() => import("./client/components/pages/patientonboarding/OtherDetails"));
const OnboardingEmailOtp = lazy(() => import("./client/components/pages/doctoronboarding/onboardingemail-otp"));
const Onboardingphone = lazy(() => import("./client/components/pages/doctoronboarding/onboardingphone"));
const Onboardingphoneotp = lazy(() => import("./client/components/pages/doctoronboarding/onboardingphoneotp"));
const Onboardingpassword = lazy(() => import("./client/components/pages/doctoronboarding/onboardingpassword"));
const PatientEmailOtp = lazy(() => import("./client/components/pages/patientonboarding/PatientEmailOtp"));
const PatientPhone = lazy(() => import("./client/components/pages/patientonboarding/Patientphone"));
const PatientPhoneotp = lazy(() => import("./client/components/pages/patientonboarding/patientphoneotp"));
const PatientPassword = lazy(() => import("./client/components/pages/patientonboarding/patientpassword"));
const PhoneOtp = lazy(() => import("./client/components/pages/patientonboarding/phoneotp"));
const Producthealthcare = lazy(() => import("./client/components/pages/producthealthcare/index"));
const Generalhome = lazy(() => import("./client/components/home/general/generalhome"));
const Comingsoon = lazy(() => import("./client/components/pages/coming soon/index"));
const Maintenance = lazy(() => import("./client/components/pages/maintanence/index"));
const PricingPlan = lazy(() => import("./client/components/pages/pricing plan/index"));
const Error404 = lazy(() => import("./client/components/pages/error/Error404"));
const Error500 = lazy(() => import("./client/components/pages/error/Error500"));
const LoginEmail = lazy(() => import("./client/components/pages/authentication/login-email"));
const LoginPhone = lazy(() => import("./client/components/pages/authentication/login-phone"));
const LoginEmailOtp = lazy(() => import("./client/components/pages/authentication/login-email-otp"));
const LoginPhoneOtp = lazy(() => import("./client/components/pages/authentication/login-phone-otp"));
const ForgotPassword2 = lazy(() => import("./client/components/pages/authentication/forgot-password2"));
const PatientSignup = lazy(() => import("./client/components/pages/authentication/patient-signup"));
const Signup = lazy(() => import("./client/components/pages/authentication/signup"));
const SuccessSignup = lazy(() => import("./client/components/pages/authentication/success-signup"));
const DoctorSignup = lazy(() => import("./client/components/pages/authentication/doctor-signup"));
const Faq = lazy(() => import("./client/components/pages/faq/index"));
const EmailOtp = lazy(() => import("./client/components/pages/authentication/email-otp"));
const MobileOtp = lazy(() => import("./client/components/pages/authentication/phone-otp"));
const AvailableTiming = lazy(() => import("./client/components/doctors/availabletiming/index"));
const Accounts = lazy(() => import("./client/components/doctors/account/index"))
const SearchDoctor2 = lazy(() => import('./client/components/pages/searchdoctor/search-doctor2'));
const Consultation = lazy(() => import("./client/components/home/consultation"));
const Payment = lazy(() => import("./client/components/home/payment"));
const Bookingsuccess = lazy(() => import("./client/components/home/bookingsuccess"));
const Patientdetails = lazy(() => import("./client/components/home/patientdetails"));
const Loginemail = lazy(() => import("./client/components/home/loginemail"));
const HomecareHome = lazy(() => import("./client/components/home/HomecareHome/index"));



const AppRouters = function () {
    // const config = "/react/template/";



    useEffect(() => {
        const handleMouseMove = (event) => {
            const cursorInner = document.querySelector(".cursor-inner");
            const cursorOuter = document.querySelector(".cursor-outer");

            if (cursorOuter) {
                cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
            }

            if (cursorInner) {
                cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
            }
        };

        const handleMouseEnter = () => {
            const cursorInner = document.querySelector(".cursor-inner");
            const cursorOuter = document.querySelector(".cursor-outer");

            if (cursorInner) {
                cursorInner.classList.add("s");
            }

            if (cursorOuter) {
                cursorOuter.classList.add("s");
            }
        };

        const handleMouseLeave = (event) => {
            const cursorInner = document.querySelector(".cursor-inner");
            const cursorOuter = document.querySelector(".cursor-outer");

            if (
                event.target.tagName !== "A" ||
                !event.target.closest(".cursor-pointer")
            ) {
                if (cursorInner) {
                    cursorInner.classList.remove("cursor-hover");
                }

                if (cursorOuter) {
                    cursorOuter.classList.remove("cursor-hover");
                }
            }
        };

        document.body.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (cursorInner) {
            cursorInner.style.visibility = "visible";
        }

        if (cursorOuter) {
            cursorOuter.style.visibility = "visible";
        }

        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Router basename={`${config.publicPath}`}>
                <div>
                    <Routes>
                        <Route path="/patient/doctor-grid" exact element={<DoctorGrid />} />
                        <Route path="/patient/doctor-list" exact element={<DoctorList />} />
                        <Route path="/pages/video-call" exact element={<VideoCall />} />
                        <Route path="/pages/voice-call" exact element={<VoiceCall />} />
                        <Route path="/doctor/chat-doctor" exact element={<DoctorChat />} />

                        <Route path="/login" exact element={<LoginContainer />} />
                        <Route path="/register" exact element={<Register />} />
                        <Route
                            path="/pages/forgot-password"
                            exact
                            element={<ForgotPassword />}
                        />
                        <Route
                            path="/pages/forgot-password2"
                            exact
                            element={<ForgotPassword2 />}
                        />
                        <Route path="/pages/login-email" exact element={<LoginEmail />} />
                        <Route path="/pages/login-phone" exact element={<LoginPhone />} />
                        <Route path="/pages/email-otp" exact element={<LoginEmailOtp />} />
                        <Route path="/pages/phone-otp" exact element={<LoginPhoneOtp />} />
                        <Route path="/pages/eotp" exact element={<EmailOtp />} />
                        <Route path="/pages/motp" exact element={<MobileOtp />} />

                        <Route
                            path="/pages/patient-signup"
                            exact
                            element={<PatientSignup />}
                        />
                        <Route
                            path="/pages/doctor-signup"
                            exact
                            element={<DoctorSignup />}
                        />
                        <Route path="/success-signup" exact element={<SuccessSignup />} />
                        <Route path="/signup" exact element={<Signup />} />

                        {/* home */}
                        <Route path="/index" exact element={<Generalhome />} />


                        {/* blog */}
                        <Route path="/blog/blog-list" exact element={<BlogList />} />
                        <Route path="/blog/blog-grid" exact element={<BlogGrid />} />
                        <Route path="/blog/blog-details" exact element={<BlogDetails />} />
                        <Route path="/doctor-blog" exact element={<Doctorblog />} />
                        <Route
                            path="/blog/doctor-add-blog"
                            exact
                            element={<Doctoraddblog />}
                        />
                        <Route
                            path="/blog/doctor-pending-blog"
                            exact
                            element={<Doctorpendingblog />}
                        />
                        <Route
                            path="/blog/doctor-edit-blog"
                            exact
                            element={<Doctoreditblog />}
                        />
                        {/* pages */}

                        <Route
                            path="/patient/search-doctor1"
                            exact
                            element={<SearchDoctor />}
                        />
                        <Route
                            path="/patient/search-doctor2"
                            exact
                            element={<SearchDoctor2 />}
                        />
                        <Route path="/pages/component" exact element={<Components />} />
                        <Route path="/pages/blank-page" exact element={<BlankPage />} />
                        <Route path="/pages/calendar" exact element={<Calendar />} />
                        <Route path="/pages/invoice" exact element={<Invoice />} />
                        <Route path="/doctor/invoice" exact element={<Invoice />} />
                        <Route path="/pages/invoice-view" exact element={<InvoiceView />} />
                        <Route path="/pages/aboutus" exact element={<Aboutus />} />
                        <Route path="/pages/contactus" exact element={<Contactus />} />
                        <Route path="/pages/comingsoon" exact element={<Comingsoon />} />
                        <Route path="/pages/maintenance" exact element={<Maintenance />} />
                        <Route path="/pages/pricing-plan" exact element={<PricingPlan />} />
                        <Route path="/pages/error-404" exact element={<Error404 />} />
                        <Route path="/pages/error-500" exact element={<Error500 />} />
                        <Route path="/pages/faq" exact element={<Faq />} />
                        <Route
                            path="/patient/patientregisterstep-1"
                            exact
                            element={<Patientregisterstepone />}
                        />
                        <Route
                            path="/patient/patientregisterstep-2"
                            exact
                            element={<Patientregistersteptwo />}
                        />
                        <Route
                            path="/patient/patientregisterstep-3"
                            exact
                            element={<Patientregisterstepthree />}
                        />
                        <Route
                            path="/patient/patientregisterstep-4"
                            exact
                            element={<Patientregisterstepfour />}
                        />
                        <Route
                            path="/patient/patientregisterstep-5"
                            exac
                            element={<Patientregisterstepfive />}
                        />
                        <Route
                            path="/patient/doctor-profile"
                            exact
                            element={<DoctorProfile />}
                        />
                        <Route path="/doctor/my-patients" exact element={<MyPatient />} />
                        <Route path="/patient/booking1" exact element={<Booking />} />
                        <Route path="/patient/booking2" exact element={<Booking2 />} />
                        <Route
                            path="/patient/patient-chat"
                            exact
                            element={<PatientChat />}
                        />
                        <Route path="/patient/checkout" exact element={<Checkout />} />
                        <Route
                            path="/patient/booking-success"
                            exact
                            element={<BookingSuccess />}
                        />
                        <Route path="/patient/dashboard" exact element={<Dashboard />} />
                        <Route
                            path="/patient/dependent"
                            exact
                            element={<PatientDependent />}
                        />
                        <Route
                            path="/patient/accounts"
                            exact
                            element={<PatientAccounts />}
                        />
                        <Route path="/patient/orders" exact element={<Orders />} />
                        <Route
                            path="/patient/medicalrecords"
                            exact
                            element={<MedicalRecords />}
                        />
                        <Route
                            path="/patient/medicaldetails"
                            exact
                            element={<MedicalDetails />}
                        />
                        <Route path="/patient/favourites" exact element={<Favourties />} />
                        <Route path="/patient/profile" exact element={<Profile />} />
                        <Route
                            path="/patient/change-password"
                            exact
                            element={<Password />}
                        />
                        <Route
                            path="/doctor/doctor-dashboard"
                            exact
                            element={<DoctorDashboard />}
                        />
                        <Route
                            path="/doctor/social-media"
                            exact
                            element={<SocialMedia />}
                        />
                        <Route
                            path="/doctor/schedule-timing"
                            exact
                            element={<ScheduleTiming />}
                        />
                        <Route
                            path="/doctor/available-timing"
                            exact
                            element={<AvailableTiming />}
                        />
                        <Route path="/doctor/account" exact element={<Accounts />} />
                        <Route
                            path="/doctor/doctor-change-password"
                            exact
                            element={<DoctorPassword />}
                        />
                        <Route
                            path="/doctor/appointments"
                            exact
                            element={<Appointments />}
                        />
                        <Route
                            path="/doctor/patient-profile"
                            exact
                            element={<PatientProfile />}
                        />
                        <Route
                            path="/add-prescription"
                            exact
                            element={<AddPescription />}
                        />
                        <Route path="/add-billing" exact element={<AddBilling />} />
                        <Route
                            path="/doctor/profile-setting"
                            exact
                            element={<ProfileSetting />}
                        />
                        <Route path="/doctor/review" exact element={<Review />} />
                        <Route
                            path="/doctor/doctor-register"
                            exact
                            element={<DoctorRegister />}
                        />
                        <Route
                            path="/registerstepone"
                            exact
                            element={<Registerstepone />}
                        />
                        <Route
                            path="/register-step-2"
                            exact
                            element={<Registersteptwo />}
                        />
                        <Route
                            path="/register-step- 3"
                            exact
                            element={<Registerstepthree />}
                        />
                        <Route path="/pages/terms" exact element={<Terms />} />
                        <Route path="/pages/privacy-policy" exact element={<Policy />} />

                        {/* Pharmacy */}
                        <Route
                            path="/Pharmacy/Pharmacy-index"
                            exact
                            element={<Pharmacy />}
                        />
                        <Route
                            path="/Pharmacy/Pharmacy-details"
                            exact
                            element={<PharmacyDetail />}
                        />
                        <Route
                            path="/Pharmacy/pharmacy-search"
                            exact
                            element={<PharmacySearch />}
                        />
                        <Route path="/Pharmacy/product-all" exact element={<Product />} />
                        <Route
                            path="/Pharmacy/product-description"
                            exact
                            element={<ProductDescription />}
                        />
                        <Route path="/Pharmacy/cart" exact element={<Cart />} />
                        <Route
                            path="/Pharmacy/product-checkout"
                            exact
                            element={<ProductCheckout />}
                        />
                        <Route
                            path="/Pharmacy/payment-success"
                            exact
                            element={<PayoutSuccess />}
                        />
                        <Route
                            path="/Pharmacy/pharmacy-register"
                            exact
                            element={<Pharmacyregister />}
                        />
                        <Route
                            path="/Pharmacy/pharmacy-registerstep-1"
                            exact
                            element={<Pharmacyregisterstepone />}
                        />
                        <Route
                            path="/Pharmacy/pharmacy-registerstep-2"
                            exact
                            element={<Pharmacyregistersteptwo />}
                        />
                        <Route
                            path="/Pharmacy/pharmacy-registerstep-3"
                            exact
                            element={<Pharmacyregisterstepthree />}
                        />
                        <Route
                            path="/editprescription"
                            exact
                            element={<EditPrescription />}
                        />
                        <Route path="/editbilling" exact element={<EditBilling />} />
                        <Route path="/patient/map-list" exact element={<MapList />} />
                        <Route
                            path="/pages/onboarding-email"
                            exact
                            element={<OnboardingEmail />}
                        />
                        <Route
                            path="/pages/onboarding-identity"
                            exact
                            element={<OnboardingIdentity />}
                        />
                        <Route
                            path="/pages/onboarding-payments"
                            exact
                            element={<OnboardingPayments />}
                        />
                        <Route
                            path="/pages/onboarding-personalize"
                            exact
                            element={<OnboardingPersonalize />}
                        />
                        <Route
                            path="/pages/onboarding-preferences"
                            exact
                            element={<OnboardingPreferences />}
                        />
                        <Route
                            path="/pages/onboarding-verification"
                            exact
                            element={<Onboardingverification />}
                        />
                        <Route
                            path="/pages/patient-email"
                            exact
                            element={<PatientOnboardingEmail />}
                        />
                        <Route
                            path="/pages/patient-personalize"
                            exact
                            element={<PatientOnboardingPersonalize />}
                        />
                        <Route
                            path="/pages/patient-details"
                            exact
                            element={<PatientOnboardingDetails />}
                        />
                        <Route
                            path="/pages/patient-family-details"
                            exact
                            element={<PatientFamilyDetails />}
                        />
                        <Route
                            path="/pages/patient-dependant-details"
                            exact
                            element={<DependantDetails />}
                        />
                        <Route
                            path="/pages/patient-other-details"
                            exact
                            element={<OtherDetails />}
                        />
                        <Route
                            path="/pages/onboarding-email-otp"
                            exact
                            element={<OnboardingEmailOtp />}
                        />
                        <Route
                            path="/pages/onboarding-phone"
                            exact
                            element={<Onboardingphone />}
                        />
                        <Route
                            path="/pages/onboarding-phone-otp"
                            exact
                            element={<Onboardingphoneotp />}
                        />
                        <Route
                            path="/pages/onboarding-password"
                            exact
                            element={<Onboardingpassword />}
                        />
                        <Route
                            path="/pages/patient-email-otp"
                            exact
                            element={<PatientEmailOtp />}
                        />
                        <Route
                            path="/pages/patient-phone"
                            exact
                            element={<PatientPhone />}
                        />
                        <Route
                            path="/pages/patient-phone-otp"
                            exact
                            element={<PatientPhoneotp />}
                        />
                        <Route
                            path="/pages/patient-password"
                            exact
                            element={<PatientPassword />}
                        />
                        <Route
                            path="/pages/product-healthcare"
                            exact
                            element={<Producthealthcare />}
                        />
                        <Route
                            path="/pages/patient-phone-otp"
                            exact
                            element={<PhoneOtp />}
                        />

                        <Route path="/consultation" exact element={<Consultation />} />
                        <Route path="/payment" exact element={<Payment />} />
                        <Route path="/bookingsuccess" exact element={<Bookingsuccess />} />
                        <Route path="/patientdetails" exact element={<Patientdetails />} />
                        <Route path="/loginemail" exact element={<Loginemail />} />
                        <Route path="/index-13" exact element={<HomecareHome />} />
                    </Routes>
                </div>

            </Router>
        </Suspense>
    );

};


export default AppRouters;