/* eslint-disable react/prop-types */
import React, { lazy, useEffect, Suspense } from "react";
import config from "config";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

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
const pharmacydetail = lazy(() => import("./client/components/Pharmacy/pharmactdetail"));
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
const patientphoneotp = lazy(() => import("./client/components/pages/patientonboarding/patientphoneotp"));
const patientpassword = lazy(() => import("./client/components/pages/patientonboarding/patientpassword"));
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
import { useSelector } from 'react-redux';
const AppContainer = function (props) {
  // const config = "/react/template/";
  const registerState = useSelector((state) => state.register);
  console.log("registerState>>>",registerState)
  if (props) {

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
            <Switch>
              <Route path="/patient/doctor-grid" exact component={DoctorGrid} />
              <Route path="/patient/doctor-list" exact component={DoctorList} />
              <Route path="/pages/video-call" exact component={VideoCall} />
              <Route path="/pages/voice-call" exact component={VoiceCall} />
              <Route path="/doctor/chat-doctor" exact component={DoctorChat} />

              <Route path="/login" exact component={LoginContainer} />
              <Route path="/register" exact component={Register} />
              <Route
                path="/pages/forgot-password"
                exact
                component={ForgotPassword}
              />
              <Route
                path="/pages/forgot-password2"
                exact
                component={ForgotPassword2}
              />
              <Route path="/pages/login-email" exact component={LoginEmail} />
              <Route path="/pages/login-phone" exact component={LoginPhone} />
              <Route path="/pages/email-otp" exact component={LoginEmailOtp} />
              <Route path="/pages/phone-otp" exact component={LoginPhoneOtp} />
              <Route path="/pages/eotp" exact component={EmailOtp} />
              <Route path="/pages/motp" exact component={MobileOtp} />

              <Route
                path="/pages/patient-signup"
                exact
                component={PatientSignup}
              />
              <Route
                path="/pages/doctor-signup"
                exact
                component={DoctorSignup}
              />
              <Route path="/success-signup" exact component={SuccessSignup} />
              <Route path="/signup" exact component={Signup} />

              {/* home */}
              <Route path="/index" exact component={Generalhome} />


              {/* blog */}
              <Route path="/blog/blog-list" exact component={BlogList} />
              <Route path="/blog/blog-grid" exact component={BlogGrid} />
              <Route path="/blog/blog-details" exact component={BlogDetails} />
              <Route path="/doctor-blog" exact component={Doctorblog} />
              <Route
                path="/blog/doctor-add-blog"
                exact
                component={Doctoraddblog}
              />
              <Route
                path="/blog/doctor-pending-blog"
                exact
                component={Doctorpendingblog}
              />
              <Route
                path="/blog/doctor-edit-blog"
                exact
                component={Doctoreditblog}
              />
              {/* pages */}

              <Route
                path="/patient/search-doctor1"
                exact
                component={SearchDoctor}
              />
              <Route
                path="/patient/search-doctor2"
                exact
                component={SearchDoctor2}
              />
              <Route path="/pages/component" exact component={Components} />
              <Route path="/pages/blank-page" exact component={BlankPage} />
              <Route path="/pages/calendar" exact component={Calendar} />
              <Route path="/pages/invoice" exact component={Invoice} />
              <Route path="/doctor/invoice" exact component={Invoice} />
              <Route path="/pages/invoice-view" exact component={InvoiceView} />
              <Route path="/pages/aboutus" exact component={Aboutus} />
              <Route path="/pages/contactus" exact component={Contactus} />
              <Route path="/pages/comingsoon" exact component={Comingsoon} />
              <Route path="/pages/maintenance" exact component={Maintenance} />
              <Route path="/pages/pricing-plan" exact component={PricingPlan} />
              <Route path="/pages/error-404" exact component={Error404} />
              <Route path="/pages/error-500" exact component={Error500} />
              <Route path="/pages/faq" exact component={Faq} />
              <Route
                path="/patient/patientregisterstep-1"
                exact
                component={Patientregisterstepone}
              />
              <Route
                path="/patient/patientregisterstep-2"
                exact
                component={Patientregistersteptwo}
              />
              <Route
                path="/patient/patientregisterstep-3"
                exact
                component={Patientregisterstepthree}
              />
              <Route
                path="/patient/patientregisterstep-4"
                exact
                component={Patientregisterstepfour}
              />
              <Route
                path="/patient/patientregisterstep-5"
                exac
                component={Patientregisterstepfive}
              />
              <Route
                path="/patient/doctor-profile"
                exact
                component={DoctorProfile}
              />
              <Route path="/doctor/my-patients" exact component={MyPatient} />
              <Route path="/patient/booking1" exact component={Booking} />
              <Route path="/patient/booking2" exact component={Booking2} />
              <Route
                path="/patient/patient-chat"
                exact
                component={PatientChat}
              />
              <Route path="/patient/checkout" exact component={Checkout} />
              <Route
                path="/patient/booking-success"
                exact
                component={BookingSuccess}
              />
              <Route path="/patient/dashboard" exact component={Dashboard} />
              <Route
                path="/patient/dependent"
                exact
                component={PatientDependent}
              />
              <Route
                path="/patient/accounts"
                exact
                component={PatientAccounts}
              />
              <Route path="/patient/orders" exact component={Orders} />
              <Route
                path="/patient/medicalrecords"
                exact
                component={MedicalRecords}
              />
              <Route
                path="/patient/medicaldetails"
                exact
                component={MedicalDetails}
              />
              <Route path="/patient/favourites" exact component={Favourties} />
              <Route path="/patient/profile" exact component={Profile} />
              <Route
                path="/patient/change-password"
                exact
                component={Password}
              />
              <Route
                path="/doctor/doctor-dashboard"
                exact
                component={DoctorDashboard}
              />
              <Route
                path="/doctor/social-media"
                exact
                component={SocialMedia}
              />
              <Route
                path="/doctor/schedule-timing"
                exact
                component={ScheduleTiming}
              />
              <Route
                path="/doctor/available-timing"
                exact
                component={AvailableTiming}
              />
              <Route path="/doctor/account" exact component={Accounts} />
              <Route
                path="/doctor/doctor-change-password"
                exact
                component={DoctorPassword}
              />
              <Route
                path="/doctor/appointments"
                exact
                component={Appointments}
              />
              <Route
                path="/doctor/patient-profile"
                exact
                component={PatientProfile}
              />
              <Route
                path="/add-prescription"
                exact
                component={AddPescription}
              />
              <Route path="/add-billing" exact component={AddBilling} />
              <Route
                path="/doctor/profile-setting"
                exact
                component={ProfileSetting}
              />
              <Route path="/doctor/review" exact component={Review} />
              <Route
                path="/doctor/doctor-register"
                exact
                component={DoctorRegister}
              />
              <Route
                path="/registerstepone"
                exact
                component={Registerstepone}
              />
              <Route
                path="/register-step-2"
                exact
                component={Registersteptwo}
              />
              <Route
                path="/register-step- 3"
                exact
                component={Registerstepthree}
              />
              <Route path="/pages/terms" exact component={Terms} />
              <Route path="/pages/privacy-policy" exact component={Policy} />

              {/* Pharmacy */}
              <Route
                path="/Pharmacy/Pharmacy-index"
                exact
                component={Pharmacy}
              />
              <Route
                path="/Pharmacy/Pharmacy-details"
                exact
                component={pharmacydetail}
              />
              <Route
                path="/Pharmacy/pharmacy-search"
                exact
                component={PharmacySearch}
              />
              <Route path="/Pharmacy/product-all" exact component={Product} />
              <Route
                path="/Pharmacy/product-description"
                exact
                component={ProductDescription}
              />
              <Route path="/Pharmacy/cart" exact component={Cart} />
              <Route
                path="/Pharmacy/product-checkout"
                exact
                component={ProductCheckout}
              />
              <Route
                path="/Pharmacy/payment-success"
                exact
                component={PayoutSuccess}
              />
              <Route
                path="/Pharmacy/pharmacy-register"
                exact
                component={Pharmacyregister}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-1"
                exact
                component={Pharmacyregisterstepone}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-2"
                exact
                component={Pharmacyregistersteptwo}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-3"
                exact
                component={Pharmacyregisterstepthree}
              />
              <Route
                path="/editprescription"
                exact
                component={EditPrescription}
              />
              <Route path="/editbilling" exact component={EditBilling} />
              <Route path="/patient/map-list" exact component={MapList} />
              <Route
                path="/pages/onboarding-email"
                exact
                component={OnboardingEmail}
              />
              <Route
                path="/pages/onboarding-identity"
                exact
                component={OnboardingIdentity}
              />
              <Route
                path="/pages/onboarding-payments"
                exact
                component={OnboardingPayments}
              />
              <Route
                path="/pages/onboarding-personalize"
                exact
                component={OnboardingPersonalize}
              />
              <Route
                path="/pages/onboarding-preferences"
                exact
                component={OnboardingPreferences}
              />
              <Route
                path="/pages/onboarding-verification"
                exact
                component={Onboardingverification}
              />
              <Route
                path="/pages/patient-email"
                exact
                component={PatientOnboardingEmail}
              />
              <Route
                path="/pages/patient-personalize"
                exact
                component={PatientOnboardingPersonalize}
              />
              <Route
                path="/pages/patient-details"
                exact
                component={PatientOnboardingDetails}
              />
              <Route
                path="/pages/patient-family-details"
                exact
                component={PatientFamilyDetails}
              />
              <Route
                path="/pages/patient-dependant-details"
                exact
                component={DependantDetails}
              />
              <Route
                path="/pages/patient-other-details"
                exact
                component={OtherDetails}
              />
              <Route
                path="/pages/onboarding-email-otp"
                exact
                component={OnboardingEmailOtp}
              />
              <Route
                path="/pages/onboarding-phone"
                exact
                component={Onboardingphone}
              />
              <Route
                path="/pages/onboarding-phone-otp"
                exact
                component={Onboardingphoneotp}
              />
              <Route
                path="/pages/onboarding-password"
                exact
                component={Onboardingpassword}
              />
              <Route
                path="/pages/patient-email-otp"
                exact
                component={PatientEmailOtp}
              />
              <Route
                path="/pages/patient-phone"
                exact
                component={PatientPhone}
              />
              <Route
                path="/pages/patient-phone-otp"
                exact
                component={patientphoneotp}
              />
              <Route
                path="/pages/patient-password"
                exact
                component={patientpassword}
              />
              <Route
                path="/pages/product-healthcare"
                exact
                component={Producthealthcare}
              />
              <Route
                path="/pages/patient-phone-otp"
                exact
                component={PhoneOtp}
              />

              <Route path="/consultation" exact component={Consultation} />
              <Route path="/payment" exact component={Payment} />
              <Route path="/bookingsuccess" exact component={Bookingsuccess} />
              <Route path="/patientdetails" exact component={Patientdetails} />
              <Route path="/loginemail" exact component={Loginemail} />
              <Route path="/index-13" exact component={HomecareHome} />
            </Switch>
          </div>

        </Router>
      </Suspense>
    );
  }
  return null;
};

export default AppContainer;
