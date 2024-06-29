<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body
    style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; line-height: 1.6; background-color: #f9f9f9; padding: 20px;">
    <div
        style="width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
        <div
            style="text-align: center; border-bottom: 2px solid #1a73e8; border-top: 2px solid #1a73e8; padding: 10px 0px; margin: 20px 0px;">
            <h1 style="font-size: 26px; color: #1a73e8; margin: 0;">New Car Booking Notification</h1>
        </div>
        <div style="margin-bottom: 20px;">
            {{-- <p>Dear Name,</p> --}}
            <p>A new car booking has been made with the following details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                    <th colspan="2"
                        style="border: 1px solid #ddd; padding: 12px; text-align: center; background-color: #1a73e8; color: white; font-weight: normal;">
                        Reservation Details</th>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">Name:</th>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                        {{ $data['name'] }}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">Email:
                    </th>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                        {{ $data['email'] }}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">Phone:
                    </th>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                        {{ $data['phone'] }}</td>
                </tr>
                @if ($data['baggage'] != null)
                    <tr>
                        <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">
                            Baggage:</th>
                        <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                            {{ $data['baggage'] }}</td>
                    </tr>
                @endif
                @if ($data['passenger'] != null)
                    <tr>
                        <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">
                            Passenger:</th>
                        <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                            {{ $data['passenger'] }}</td>
                    </tr>
                @endif
                @if ($data['child'] != null)
                    <tr>
                        <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">
                            Child:</th>
                        <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                            {{ $data['child'] }}</td>
                    </tr>
                @endif



                <tr>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">Pick-up
                        Location:</th>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                        {{ $data['pick-up'] }}</td>
                </tr>
                <tr>
                    @if ($data['bookingPerKm'] == true)
                        <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">
                            Drop-off
                            Location:</th>
                        <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                            {{ $data['drop-off'] }}</td>
                    @else
                        <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">
                            Trip Duration:</th>
                        <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                            {{ $data['total_hour'] }}</td>
                    @endif
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">Pick-up
                        Time:</th>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                        {{ $data['time'] }}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">Pick-up
                        Date:</th>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                        {{ $data['date'] }}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;">Car:</th>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                        {{ $data['title'] }}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: normal;"><strong>Total Rent:</strong>
                    </th>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #fff;">
                        <strong>{{$data['total_rent']}}</strong></td>
                </tr>
            </table>
            <p>Please review and manage the booking accordingly. </p>
        </div>
        <div style="margin-top: 20px;">
            <p>Best regards,</p>
            <p><strong style="color: #1a73e8;">Destinata</strong></p>
        </div>
    </div>
</body>

</html>
