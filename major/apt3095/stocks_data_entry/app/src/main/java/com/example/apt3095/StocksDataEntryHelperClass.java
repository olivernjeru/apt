package com.example.apt3095;

public class StocksDataEntryHelperClass {
    String ticker, quantity, bid, offer, time, date;

    public StocksDataEntryHelperClass() {
    }

    public StocksDataEntryHelperClass(String ticker, String quantity, String bid, String offer, String time, String date) {
        this.ticker = ticker;
        this.quantity = quantity;
        this.bid = bid;
        this.offer = offer;
        this.time = time;
        this.date = date;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getBid() {
        return bid;
    }

    public void setBid(String bid) {
        this.bid = bid;
    }

    public String getOffer() {
        return offer;
    }

    public String getTime() {
        return time;
    }

    public String getDate() {
        return date;
    }

    public void setOffer(String offer) {
        this.offer = offer;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
