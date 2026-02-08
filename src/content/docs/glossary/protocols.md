---
title: Protocols
---
## What is a Protocol?
You can think of a protocol as simply a set of rules that determines how data is transmitted between devices. In all the wireless networks we are concerned with for the purpose of livestreaming, data is split up into packets. By following a set protocol, both the sender and receiver of these data packets can understand how each packet is formatted, and how to correctly rearrange the packets. 

## What is RTMP?
RTMP (Real-Time Messaging Protocol) is the only live media protocol supported by Twitch. No matter how you set up your livestream, the last step will involve sending RTMP video to Twitch's ingest. For most people, this is done through OBS. 

RTMP streaming guarantees packet delivery, which would usually be great for reliability but over the unstable network conditions of IRL streaming, it can cause a ‘traffic jam’ of video delay.

## What is SRT?
SRT (Secure Reliable Transport) is a live video streaming protocol specifically designed to handle unstable network conditions. 

SRT streaming doesn’t have RTMP's 'traffic jam' issue as it doesn't guarantee packet delivery. It allows late packets to be dropped and forgotten about if they do not reach their destination before the SRT latency runs out (typically measured in milliseconds). 

## What is SRTLA?
SRTLA, developed by RationalIRL for BELABOX, extends SRT with Link Aggregation.

Link Aggregation means the SRT packets of your stream can be distributed across multiple internet connections simultaneously (like cellular and WiFi), then reassembled at the destination into a single SRT stream. This process is referred to as connection bonding.

## What is RIST?
RIST (Reliable Internet Stream Transport) is a live video streaming protocol, similar to SRT in the sense that it is also designed to handle unstable network conditions, and because it also doesn't guarantee packet delivery.

RIST can be implemented to support connection bonding so perhaps could become a strong competitor against SRTLA in the future, however at the moment it is not thoroughly tested or widely used. For that reason, I would not recommend using RIST to beginner or 'mission-critical' streamers who require stability above all else. If you would like to try out RIST, it is supported by Moblin and IRLTools.com's IRLBOX, with RIST cloud Relays available from IRLHosting.com

## What is UVC?
UVC (USB Video Class) is a protocol that determines how live video data from webcams and digital cameras is transmitted over a physical USB connection.

Thanks to the requirement of a physical USB connection, UVC does not face the same error correction challenge faced by other protocols when in harsh network conditions. You can rely on UVC to deliver consistent quality and fixed delay.

A great advantage of UVC is that it allows power to be sent across the same USB cable as the video data, so many UVC cameras can be charged and transmit video at the same time through only one cable. 

The largest disadvantage of UVC is that most digital cameras do not support UVC transmission at resolutions above 1080p30. This means for those interested in 60fps or resolutions like 4K, UVC is not usually an option.

## What is HDMI?
