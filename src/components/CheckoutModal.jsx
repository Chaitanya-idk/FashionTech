import React, { useState } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { soundscape } from '../utils/soundscape';
import {
  X, Check, ArrowRight, ArrowLeft, ShieldCheck, CreditCard,
  QrCode, Landmark, Banknote, Sparkles, Package, Printer, Download,
  Truck, Calendar, MapPin, Mail, Phone, User
} from 'lucide-react';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    clearCart,
    cartSubtotal,
    shippingCost,
    packagingFee,
    estimatedTax,
    cartTotal,
    giftPackaging,
    formatPrice,
    navigateTo,
    showToast
  } = useConvertelle();

  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    title: 'Ms.',
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@convertelle.luxury',
    phone: '+91 98765 43210',
    address: '42 Aurum Boulevard, Suite 18B',
    landmark: 'Opposite Royal Opera House',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    country: 'India',
    deliveryInstructions: 'Deliver to concierge desk in signature gold packaging.',
    giftMessage: 'With compliments and timeless grace.',
    paymentMethod: 'upi', // 'card', 'upi', 'netbanking', 'cod'
    cardNumber: '•••• •••• •••• 8824',
    cardName: 'ELEANOR VANCE',
    cardExpiry: '12/28',
    cardCvv: '•••',
    upiId: 'eleanor@okhdfcbank'
  });

  // Simulated Order Result
  const [orderSummary, setOrderSummary] = useState(null);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    soundscape.playChime('click');
    if (step === 1) {
      if (!formData.firstName || !formData.email || !formData.phone) {
        showToast('Please provide your name, email, and phone number.');
        return;
      }
    }
    if (step === 2) {
      if (!formData.address || !formData.city || !formData.pincode) {
        showToast('Please provide your delivery address and postal code.');
        return;
      }
    }
    if (step === 4) {
      // Complete Order Simulation
      const generatedOrderNumber = `CE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const order = {
        orderId: generatedOrderNumber,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
        items: [...cart],
        subtotal: cartSubtotal,
        shipping: shippingCost,
        packaging: packagingFee,
        tax: estimatedTax,
        total: cartTotal,
        customer: { ...formData },
        estimatedDelivery: '3 to 5 Business Days'
      };
      setOrderSummary(order);
      clearCart();
      soundscape.playChime('transform');
      setStep(5);
      return;
    }
    setStep((s) => s + 1);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-3 sm:p-6 bg-[#1A1815]/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] border border-[#DDD6CA] shadow-2xl rounded-sm overflow-hidden my-auto animate-scale-up flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#E8E2D8] flex items-center justify-between">
          <div>
            <span className="text-[9px] tracking-widest uppercase font-semibold text-[#8C6B26] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> ConvertElle Private Atelier
            </span>
            <h2 className="font-serif text-2xl text-[#1A1815]">
              {step === 5 ? 'Order Confirmation' : 'Simulated Luxury Checkout'}
            </h2>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 rounded-full hover:bg-[#F2EDE4] text-[#1A1815] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {step < 5 && (
          <div className="bg-[#FAF8F5] px-6 py-3 border-b border-[#E8E2D8]">
            <div className="flex items-center justify-between max-w-xl mx-auto">
              {[
                { s: 1, label: 'Contact' },
                { s: 2, label: 'Address' },
                { s: 3, label: 'Review' },
                { s: 4, label: 'Payment' }
              ].map((item, idx) => (
                <div key={item.s} className="flex items-center">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-full text-[11px] font-semibold flex items-center justify-center transition-colors ${
                        step > item.s
                          ? 'bg-emerald-600 text-white'
                          : step === item.s
                          ? 'bg-[#B89047] text-white shadow-sm'
                          : 'bg-[#E8E2D8] text-[#666057]'
                      }`}
                    >
                      {step > item.s ? <Check className="w-3.5 h-3.5" /> : item.s}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-wider hidden sm:inline ${
                        step === item.s ? 'font-semibold text-[#1A1815]' : 'text-[#999083]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {idx < 3 && <div className="w-8 sm:w-16 h-px bg-[#DDD6CA] mx-2 sm:mx-3" />}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {/* STEP 1: Contact Information */}
          {step === 1 && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <h3 className="font-serif text-xl text-[#1A1815]">Contact & Client Information</h3>
                <p className="text-xs text-[#666057] mt-1">We will send order confirmation details and tailoring progress updates here.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">Title</label>
                  <select
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                  >
                    <option>Ms.</option>
                    <option>Mrs.</option>
                    <option>Dr.</option>
                    <option>Madame</option>
                    <option>Mx.</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#999083] absolute left-3 top-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-9 p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#999083] absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-9 p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E8E2D8] rounded-sm text-xs text-[#666057] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Complimentary Personal Stylist Consultation provided via WhatsApp or email upon purchase.</span>
              </div>
            </div>
          )}

          {/* STEP 2: Delivery Address */}
          {step === 2 && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <h3 className="font-serif text-xl text-[#1A1815]">White-Glove Delivery Destination</h3>
                <p className="text-xs text-[#666057] mt-1">Directly dispatched from our central atelier in Mumbai.</p>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">Street Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">Apartment / Landmark</label>
                  <input
                    type="text"
                    value={formData.landmark}
                    onChange={(e) => handleInputChange('landmark', e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">State</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">PIN Code</label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">Country</label>
                  <input
                    type="text"
                    disabled
                    value="India (Domestic Atelier)"
                    className="w-full p-2.5 bg-[#F2EDE4] border border-[#DDD6CA] text-xs text-[#666057] rounded-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1A1815] mb-1">Special Concierge Delivery Notes</label>
                <textarea
                  rows={2}
                  value={formData.deliveryInstructions}
                  onChange={(e) => handleInputChange('deliveryInstructions', e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#DDD6CA] text-xs text-[#1A1815] rounded-sm focus:border-[#B89047] outline-none"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Order Review */}
          {step === 3 && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <h3 className="font-serif text-xl text-[#1A1815]">Review Your Atelier Order</h3>
                <p className="text-xs text-[#666057] mt-1">Verify your bespoke modular fashion selection before payment authentication.</p>
              </div>

              {/* Items Summary */}
              <div className="space-y-3 bg-white p-4 border border-[#E8E2D8] rounded-sm divide-y divide-[#F2EDE4]">
                {cart.map((item) => (
                  <div key={item.cartId} className="pt-3 first:pt-0 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-14 h-18 object-cover border border-[#E8E2D8] rounded-sm" />
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-[#1A1815]">{item.name}</h4>
                        <p className="text-[11px] text-[#666057]">
                          Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                        </p>
                        {item.isCustomEnsemble && (
                          <span className="text-[9px] text-[#8C6B26] font-semibold uppercase">Custom Ensemble with Detachable Kits</span>
                        )}
                      </div>
                    </div>
                    <span className="font-serif text-sm font-semibold text-[#1A1815]">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="p-4 bg-white border border-[#E8E2D8] rounded-sm space-y-2 text-xs">
                <div className="flex justify-between text-[#666057]">
                  <span>Subtotal</span>
                  <span className="text-[#1A1815] font-semibold">{formatPrice(cartSubtotal)}</span>
                </div>
                <div className="flex justify-between text-[#666057]">
                  <span>White-Glove Shipping</span>
                  <span>{shippingCost === 0 ? <strong className="text-emerald-700">COMPLIMENTARY</strong> : formatPrice(shippingCost)}</span>
                </div>
                {giftPackaging && (
                  <div className="flex justify-between text-[#666057]">
                    <span>Signature Gold Box & Ribbon</span>
                    <span>{formatPrice(packagingFee)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#666057]">
                  <span>Textile GST (5%)</span>
                  <span>{formatPrice(estimatedTax)}</span>
                </div>
                <div className="pt-2 border-t border-[#E8E2D8] flex justify-between items-baseline font-semibold text-[#1A1815]">
                  <span className="uppercase tracking-wider">Final Order Total (INR)</span>
                  <span className="font-serif text-2xl text-[#8C6B26]">{formatPrice(cartTotal)}</span>
                </div>
              </div>

              {/* Delivery Details Recap */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D8] rounded-sm text-xs text-[#666057]">
                <strong className="block text-[#1A1815] mb-1 font-semibold uppercase tracking-wider text-[10px]">
                  Shipping To:
                </strong>
                <p>{formData.title} {formData.firstName} {formData.lastName}</p>
                <p>{formData.address}, {formData.landmark}, {formData.city}, {formData.state} - {formData.pincode}</p>
                <p className="mt-1">Contact: {formData.phone} • {formData.email}</p>
              </div>
            </div>
          )}

          {/* STEP 4: Simulated Payment */}
          {step === 4 && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <h3 className="font-serif text-xl text-[#1A1815]">Simulated Payment Method</h3>
                <p className="text-xs text-[#666057] mt-1">Select your preferred transaction channel. No actual monetary exchange occurs.</p>
              </div>

              {/* Payment Method Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'upi', label: 'Instant UPI', icon: QrCode, sub: 'GPay, PhonePe, Paytm' },
                  { id: 'card', label: 'Luxury Card', icon: CreditCard, sub: 'Visa, Amex, MC' },
                  { id: 'netbanking', label: 'NetBanking', icon: Landmark, sub: 'HDFC, ICICI, SBI' },
                  { id: 'cod', label: 'White-Glove COD', icon: Banknote, sub: 'Concierge Verification' }
                ].map((pm) => {
                  const Icon = pm.icon;
                  return (
                    <button
                      key={pm.id}
                      onClick={() => handleInputChange('paymentMethod', pm.id)}
                      className={`p-3.5 border rounded-sm text-left flex flex-col justify-between transition-all ${
                        formData.paymentMethod === pm.id
                          ? 'border-[#B89047] bg-[#B89047]/10 ring-1 ring-[#B89047]'
                          : 'border-[#DDD6CA] bg-white hover:border-[#B89047]/50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${formData.paymentMethod === pm.id ? 'text-[#B89047]' : 'text-[#666057]'}`} />
                      <div>
                        <span className="block font-semibold text-xs text-[#1A1815]">{pm.label}</span>
                        <span className="text-[10px] text-[#999083]">{pm.sub}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Payment Details Container */}
              <div className="p-6 bg-white border border-[#E8E2D8] rounded-sm">
                {formData.paymentMethod === 'upi' && (
                  <div className="space-y-4 text-center">
                    <p className="text-xs text-[#666057]">Scan simulated QR code using any UPI app or authenticate with VPA.</p>
                    <div className="w-36 h-36 mx-auto bg-[#FAF8F5] border-2 border-dashed border-[#B89047] rounded-sm p-2 flex flex-col items-center justify-center">
                      <QrCode className="w-24 h-24 text-[#1A1815]" />
                      <span className="text-[9px] uppercase tracking-wider text-[#8C6B26] font-bold mt-1">ConvertElle UPI</span>
                    </div>
                    <div className="max-w-xs mx-auto">
                      <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#1A1815] mb-1">Simulated UPI VPA</label>
                      <input
                        type="text"
                        value={formData.upiId}
                        onChange={(e) => handleInputChange('upiId', e.target.value)}
                        className="w-full p-2 bg-[#FAF8F5] border border-[#DDD6CA] text-xs text-center rounded-sm font-mono text-[#1A1815]"
                      />
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-[#1A1815] to-[#33302B] text-white rounded-sm border border-[#B89047]/40 max-w-sm mx-auto shadow-md">
                      <div className="flex justify-between items-center mb-6">
                        <span className="font-cinzel tracking-widest text-xs text-[#F0E2C8]">CONVERTELLE NOIR PRIVÉ</span>
                        <CreditCard className="w-5 h-5 text-[#B89047]" />
                      </div>
                      <p className="font-mono text-base tracking-widest mb-3">{formData.cardNumber}</p>
                      <div className="flex justify-between text-[10px] text-[#DDD6CA]">
                        <span>{formData.cardName}</span>
                        <span>EXP: {formData.cardExpiry}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                      <div>
                        <label className="block text-[10px] uppercase font-semibold mb-1">Card Expiry</label>
                        <input
                          type="text"
                          value={formData.cardExpiry}
                          onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
                          className="w-full p-2 bg-[#FAF8F5] border border-[#DDD6CA] text-xs rounded-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-semibold mb-1">CVV</label>
                        <input
                          type="password"
                          value="888"
                          disabled
                          className="w-full p-2 bg-[#FAF8F5] border border-[#DDD6CA] text-xs rounded-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'netbanking' && (
                  <div className="text-center py-4 space-y-3">
                    <Landmark className="w-8 h-8 mx-auto text-[#B89047]" />
                    <p className="text-xs text-[#666057]">Simulated direct debit authentication with premium Indian financial institutions.</p>
                    <div className="flex justify-center gap-3">
                      {['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'State Bank of India'].map((b) => (
                        <span key={b} className="px-3 py-1.5 bg-[#FAF8F5] border border-[#DDD6CA] text-[11px] rounded-sm font-medium">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'cod' && (
                  <div className="text-center py-4 space-y-2">
                    <Banknote className="w-8 h-8 mx-auto text-[#B89047]" />
                    <h4 className="font-serif text-base text-[#1A1815]">White-Glove Payment on Delivery</h4>
                    <p className="text-xs text-[#666057] max-w-md mx-auto">
                      Our uniformed atelier delivery concierge will present your bespoke garments and collect payment via card or cheque upon personal inspection.
                    </p>
                  </div>
                )}
              </div>

              {/* Total reminder */}
              <div className="flex items-center justify-between p-4 bg-[#FAF8F5] border border-[#E8E2D8] rounded-sm">
                <span className="text-xs uppercase tracking-wider text-[#666057]">Amount to Authorize</span>
                <span className="font-serif text-2xl font-bold text-[#8C6B26]">{formatPrice(cartTotal)}</span>
              </div>
            </div>
          )}

          {/* STEP 5: Order Confirmation */}
          {step === 5 && orderSummary && (
            <div className="space-y-6 max-w-2xl mx-auto text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#8C6B26]">
                  Atelier Acquisition Confirmed
                </span>
                <h3 className="font-serif text-3xl text-[#1A1815] mt-1">Thank You, {orderSummary.customer.title} {orderSummary.customer.lastName}</h3>
                <p className="text-xs text-[#666057] mt-1">
                  Your simulated haute couture order has been registered in the ConvertElle atelier log.
                </p>
                <div className="inline-block mt-3 px-4 py-1.5 bg-white border border-[#B89047]/40 rounded-full font-mono text-sm text-[#8C6B26] font-bold">
                  Order Reference: {orderSummary.orderId}
                </div>
              </div>

              {/* Simulated Delivery Timeline */}
              <div className="p-6 bg-white border border-[#E8E2D8] rounded-sm text-left">
                <h4 className="font-serif text-base text-[#1A1815] mb-4 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#B89047]" /> Couture Fulfilment Journey
                </h4>
                <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                  <div className="space-y-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <strong className="block text-[#1A1815]">Registered</strong>
                    <span className="text-[#999083]">Today</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-6 h-6 rounded-full bg-[#B89047] text-white flex items-center justify-center mx-auto animate-pulse">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <strong className="block text-[#1A1815]">Atelier Prep</strong>
                    <span className="text-[#999083]">Tomorrow</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-6 h-6 rounded-full bg-[#E8E2D8] text-[#666057] flex items-center justify-center mx-auto">
                      <Package className="w-3.5 h-3.5" />
                    </div>
                    <strong className="block text-[#666057]">Quality Inspection</strong>
                    <span className="text-[#999083]">+2 Days</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-6 h-6 rounded-full bg-[#E8E2D8] text-[#666057] flex items-center justify-center mx-auto">
                      <Truck className="w-3.5 h-3.5" />
                    </div>
                    <strong className="block text-[#666057]">White-Glove Delivery</strong>
                    <span className="text-[#999083]">{orderSummary.estimatedDelivery}</span>
                  </div>
                </div>
              </div>

              {/* Garments Acquired */}
              <div className="p-4 bg-white border border-[#E8E2D8] rounded-sm text-left divide-y divide-[#F2EDE4]">
                <span className="block text-[10px] tracking-wider uppercase font-semibold text-[#8C6B26] mb-2">
                  Acquired Creations ({orderSummary.items.length})
                </span>
                {orderSummary.items.map((item) => (
                  <div key={item.cartId} className="py-2.5 flex justify-between items-center text-xs">
                    <div>
                      <strong className="font-serif text-[#1A1815]">{item.name}</strong>
                      <span className="block text-[11px] text-[#666057]">Size: {item.size} • Color: {item.color} • Qty: {item.quantity}</span>
                    </div>
                    <span className="font-serif font-semibold">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="pt-3 flex justify-between items-baseline font-serif text-lg font-bold text-[#8C6B26]">
                  <span>Total Settled (Simulated)</span>
                  <span>{formatPrice(orderSummary.total)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="px-5 py-2.5 bg-white border border-[#DDD6CA] text-[#1A1815] text-xs uppercase tracking-wider font-semibold rounded-sm hover:border-[#B89047] flex items-center gap-2 transition-colors"
                >
                  <Printer className="w-4 h-4 text-[#8C6B26]" /> Print Dossier Receipt
                </button>
                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    navigateTo('shop');
                  }}
                  className="px-6 py-2.5 bg-[#B89047] hover:bg-[#8C6B26] text-white text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center gap-2 transition-colors shadow-md"
                >
                  Continue Shopping <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 5 && (
          <div className="p-6 bg-white border-t border-[#E8E2D8] flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#666057] hover:text-[#1A1815] flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Previous Step
              </button>
            ) : (
              <span className="text-[11px] text-[#999083]">Step 1 of 4</span>
            )}

            <button
              onClick={handleNextStep}
              className="py-3 px-8 bg-[#B89047] hover:bg-[#8C6B26] text-white text-xs tracking-widest uppercase font-semibold rounded-sm flex items-center gap-2 transition-all shadow-md"
            >
              {step === 4 ? (
                <>
                  <Check className="w-4 h-4" /> Authenticate Simulated Payment
                </>
              ) : (
                <>
                  Continue <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

