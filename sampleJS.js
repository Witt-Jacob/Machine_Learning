//
//  sampleJS.swift
//  FormIoTest
//
//  Created by Miguel Figueroa on 7/14/22.
//

import JavaScriptCore

//function toggleFocus(el)
// {
//  el.style.backgroundColor =  el.style.backgroundColor=="yellow" ? "inherit" : "yellow";
// }
//return document.getElementsByTagName('*');
//document.getElementsByClassName("form-group has-feedback formio-component formio-component-hidden formio-component-uuid uuid formio-component-label-hidden").innerHTML = hello;
document.getElementsByClassName(`formio-component-${"uuid"}`)[0].component.setValue("TEST from Jake");
//document.getElementsByClassName("col-form-label").innerHTML = hello;

