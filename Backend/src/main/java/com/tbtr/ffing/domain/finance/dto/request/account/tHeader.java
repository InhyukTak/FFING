package com.tbtr.ffing.domain.finance.dto.request.account;


import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.tbtr.ffing.domain.finance.constants.financeConstants;
import com.tbtr.ffing.global.openfeign.constants.CommonConstants;
import lombok.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * 수시입출금 계좌생성에 필요한 request header
 */
@Builder
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@ToString // 디버깅용
@JsonPropertyOrder({
	"apiName",
	"transmissionDate",
	"transmissionTime",
	"institutionCode",
	"fintechAppNo",
	"apiServiceCode",
	"institutionTransactionUniqueNo",
	"apiKey",
	"userKey"
})
public class tHeader {
	private String apiName;
	private String transmissionDate;
	private String transmissionTime;
	private String institutionCode;
	private String fintechAppNo;
	private String apiServiceCode;
	private String institutionTransactionUniqueNo;
	private String apiKey;
	private String userKey;

	public static tHeader of(String apiKey, String userKey, String random) {

		LocalDateTime now = LocalDateTime.now();
		String transmissionDate = now.format(DateTimeFormatter.ofPattern(CommonConstants.DATE_FORMAT));
		String transmissionTime = now.format(DateTimeFormatter.ofPattern(CommonConstants.TIME_FORMAT));

		return tHeader.builder()
			.apiName(financeConstants.TRANSFER_DEMAND_DEPOSIT_ACC_API_NAME)
			.transmissionDate(transmissionDate)
			.transmissionTime(transmissionTime)
			.institutionCode(CommonConstants.INSTITUTION_CODE)
			.fintechAppNo(CommonConstants.FINTECH_APP_NO)
			.apiServiceCode(financeConstants.TRANSFER_DEMAND_DEPOSIT_ACC_API_SERVICE_CODE)
			.institutionTransactionUniqueNo(transmissionDate + transmissionTime + random)
			.apiKey(apiKey)
			.userKey(userKey)
			.build();
	}
}
